import { SupportedCurrency } from "../utils/currencyCode";

type HTTPMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "HEAD";

type StreamPayResponse<T> = {
    status: boolean;
    message: string;
    data: T;
};

interface Request {
    path: string;
    method: HTTPMethod;
    headers?: Record<string, string>;
    body?: Record<string, unknown>;
    query?: Record<string, string>;
}

export interface StreamPayTransactionAuthorization {
    reference: string;
    authorization_url: string;
    access_code: string;
}

export default class StreamPay {
    apiKey: string;
    constructor(apiKey: string);
    protected requestStreamPayAPI<T>(request: Request): Promise<T>;

    transaction: {
        verify: ({ reference }: { reference: string }) => Promise<StreamPayResponse<{
            id: number;
            status: string;
            reference: string;
        }>>;
        get: ({ id }: { id: string }) => Promise<StreamPayResponse<{
            id: number;
            status: string;
            reference: string;
        }>>;
        initialize: ({ amount, email, currency, reference, walletAddress, chainId }: {
            amount: number;
            email?: string;
            currency?: SupportedCurrency | "EUR" | "USD" | "EURC" | "USDC" | "USDT" | "SOL" | "SPAY" | "STRM";
            reference?: string;
            walletAddress?: string;
            chainId?: string;
        }) => Promise<StreamPayResponse<{
            authorization_url: string;
            access_code: string;
            reference: string;
        }>>;
    };

    refund: {
        create: ({ transaction, amount, walletAddress }: {
            transaction: string;
            amount: number;
            walletAddress: string; // Add walletAddress parameter
        }) => Promise<StreamPayResponse<{
            id: number;
            status: string;
            reference: string;
            amount: number;
        }>>;
    };
}

export {};
