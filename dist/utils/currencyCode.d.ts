export declare const supportedCurrencies: readonly ["EUR", "USD", "EURC", "USDC", "USDT", "SOL", "SPAY", "STRM"];
export type SupportedCurrency = (typeof supportedCurrencies)[number];
export declare function isSupportedCurrency(currencyCode: string): currencyCode is SupportedCurrency;
export declare function validateCurrencyCode(currencyCode: string): SupportedCurrency;
