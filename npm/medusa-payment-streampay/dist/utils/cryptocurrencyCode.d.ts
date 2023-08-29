export declare const supportedCryptocurrencies: readonly ["BTC", "ETH", "EURC", "USDC", "USDT", "SOL", "SPAY", "STRM"];
export type SupportedCryptocurrency = (typeof supportedCryptocurrencies)[number];
export declare function isSupportedCryptocurrencies(cryptocurrencyCode: string): cryptocurrencyCode is SupportedCryptocurrencies;
export declare function validateCryptocurrenciesCode(cryptocurrencyCode: string): SupportedCryptocurrencies;
