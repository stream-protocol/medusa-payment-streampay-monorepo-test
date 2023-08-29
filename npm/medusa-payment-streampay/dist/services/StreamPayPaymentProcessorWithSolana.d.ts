import { AbstractPaymentProcessor, PaymentSessionData, PaymentSessionStatus } from "@medusajs/medusa";

export interface StreamPayPaymentProcessorWithSolanaOptions {
  secret_key: string;
}

export default class StreamPayPaymentProcessorWithSolana extends AbstractPaymentProcessor {
  constructor(container: any, options: StreamPayPaymentProcessorWithSolanaOptions);

  initiatePayment(context: {
    amount: number;
    email: string;
    currency_code: string;
    wallet_address?: string;
  }): Promise<PaymentSessionData>;

  updatePaymentData(payment: PaymentSessionData, data: any): Promise<PaymentSessionData>;

  updatePayment(context: any, payment: PaymentSessionData): Promise<PaymentSessionData>;

  authorizePayment(payment: PaymentSessionData): Promise<{
    status: PaymentSessionStatus;
    data: any;
  }>;

  retrievePayment(payment: PaymentSessionData): Promise<PaymentSessionData>;

  refundPayment(payment: PaymentSessionData, refundAmount: number): Promise<PaymentSessionData>;

  getPaymentStatus(payment: PaymentSessionData): Promise<PaymentSessionStatus>;

  capturePayment(payment: PaymentSessionData): Promise<PaymentSessionData>;

  cancelPayment(payment: PaymentSessionData): Promise<PaymentSessionData>;

  deletePayment(payment: PaymentSessionData): Promise<PaymentSessionData>;
}
