import https from "https";

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

export type SupportedCurrency = "EUR" | "USD" | "EURC" | "USDC" | "SOL" | "STRM";

export default class StreamPay {
    apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    protected async requestStreamPayAPI<T>(request: Request): Promise<T> {
        // Implementation of the API request using the 'https' module
    }

    transaction = {
        verify: async ({ reference }: { reference: string }): Promise<StreamPayResponse<{
            id: number;
            status: string;
            reference: string;
        }>> => {
            // Implementation of the verify method
        },
        get: async ({ id }: { id: string }): Promise<StreamPayResponse<{
            id: number;
            status: string;
            reference: string;
        }>> => {
            // Implementation of the get method
        },
        initialize: async ({ amount, email, currency, reference }: {
            amount: number;
            email?: string;
            currency?: SupportedCurrency;
            reference?: string;
        }): Promise<StreamPayResponse<{
            authorization_url: string;
            access_code: string;
            reference: string;
        }>> => {
            // Implementation of the initialize method
        },
    };

    refund = {
        create: async ({ transaction, amount }: {
            transaction: string;
            amount: number;
        }): Promise<StreamPayResponse<{
            id: number;
            status: string;
            reference: string;
            amount: number;
        }>> => {
            // Implementation of the refund create method
        },
    };
}
