"use strict";
import { Solana } from 'solana-lib';
import { PublicKey } from '@solana/web3.js';
import { AbstractPaymentProcessor, PaymentSessionStatus, MedusaError, MedusaErrorTypes } from "@medusajs/medusa";
import { validateCurrencyCode } from "../utils/currencyCode";
import StreamPay from "../lib/streampay";

class StreamPayPaymentProcessorWithSolana extends AbstractPaymentProcessor {
  constructor(container, options) {
    super(container);
    if (!options.secret_key) {
      throw new MedusaError(MedusaErrorTypes.INVALID_ARGUMENT, "The StreamPay provider requires the secret_key option");
    }
    this.configuration = options;
    this.streampay = new StreamPay(this.configuration.secret_key);
  }

  async initiatePayment(context) {
    const { amount, email, currency_code, wallet_address } = context;

    if (currency_code === 'SOL') {
      const solana = new Solana();
      const walletPublicKey = new PublicKey(wallet_address);
      const transaction = solana.createTransaction(walletPublicKey, amount);

      const authorization_url = await this.streampay.transaction.initialize({
        amount: amount * 100, // Convert SOL to smallest unit
        email,
        currency: currency_code,
        reference: transaction.signature.toString(),
      });

      return {
        session_data: {
          streampayTxRef: transaction.signature.toString(),
          streampayTxAuthData: authorization_url,
        },
      };
    } else if (['USDT', 'USDC', 'EUROC', 'STRM', 'SPAY', 'EUR', 'USD'].includes(currency_code)) {
      const validatedCurrencyCode = validateCurrencyCode(currency_code);
      const authorization_url = await this.streampay.transaction.initialize({
        amount: amount * 100, // Convert to smallest unit
        email,
        currency: validatedCurrencyCode,
      });

      return {
        session_data: {
          streampayTxRef: authorization_url.reference,
          streampayTxAuthData: authorization_url,
        },
      };
    } else {
      return super.initiatePayment(context);
    }
  }

  // Other methods...

  buildError(message, e) {
    // Build error response
    return super.buildError(message, e);
  }
}

StreamPayPaymentProcessorWithSolana.identifier = "streampay_with_solana";

export default StreamPayPaymentProcessorWithSolana;
