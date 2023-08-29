// currencyCode.js
"use strict";

const { MedusaError, MedusaErrorTypes } = require("@medusajs/utils");

const supportedCurrencies = ["EUR", "USD", "USDC", "EUROC", "USDT", "STRM", "SPAY", "SOL"];

function isSupportedCurrency(currencyCode) {
  return supportedCurrencies.includes(currencyCode);
}

function validateCurrencyCode(currencyCode) {
  if (!isSupportedCurrency(currencyCode)) {
    // Try uppercasing the code
    if (isSupportedCurrency(currencyCode.toUpperCase())) {
      return currencyCode.toUpperCase();
    }
    throw new MedusaError(
      MedusaErrorTypes.INVALID_ARGUMENT,
      `Unsupported currency code provided to StreamPay Payment Provider: ${currencyCode}`
    );
  }
  return currencyCode;
}

module.exports = {
  supportedCurrencies,
  isSupportedCurrency,
  validateCurrencyCode,
};
