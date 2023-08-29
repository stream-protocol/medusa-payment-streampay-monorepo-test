# Stream Payments Provider for Medusa e-Commerce Stores

![Medusa + StreamPay Logo](https://i.imgur.com/77SRbou.png) <!-- Replace with actual logo -->

This repository contains the Stream Payments provider for Medusa e-Commerce stores. Medusa is an open-source headless commerce engine that allows you to build flexible and customizable e-commerce experiences. This Stream Payments provider integration enables Medusa stores to accept both stablecoin and cryptocurrency payments using the Solana blockchain and web3 technologies via the Stream Payments platform.

## Table of Contents

- [Stream Payments Provider for Medusa e-Commerce Stores](#stream-payments-provider-for-medusa-e-commerce-stores)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Configuration](#configuration)
  - [Supported Cryptocurrencies](#supported-cryptocurrencies)
  - [Example](#example)
  - [Contributing](#contributing)
  - [ToDo](#todo)
    - [Stream Payments Merchant Portal UI/UX](#stream-payments-merchant-portal-uiux)
    - [Functionalities](#functionalities)
    - [Solana Blockchain Implementation](#solana-blockchain-implementation)
    - [Web3.js Integration](#web3js-integration)
    - [Circle's USDC and EURO Stablecoin Payment Features](#circles-usdc-and-euro-stablecoin-payment-features)
    - [Technical Documentation and Architecture](#technical-documentation-and-architecture)
    - [Merchant Wallet and Fee Structure](#merchant-wallet-and-fee-structure)
    - [Reward System and Donation Options](#reward-system-and-donation-options)
  - [License](#license)

## Installation

To install the Stream Payments provider for Medusa, you can use npm:

```bash
npm install medusa-payment-streampay
```

## Usage

To use the Stream Payments provider in your Medusa project, you'll need to follow these steps:

1. Install the `medusa-payment-streampay` package.
2. Configure the provider using your Stream Payments API credentials and Solana wallet.
3. Integrate the provider in your Medusa store's payment flow.

## Configuration

Configure the Stream Payments provider by creating an instance of the `StreamPayPaymentProcessorWithSolana` class with your Stream Payments API credentials and Solana wallet address:

```javascript
import StreamPayPaymentProcessorWithSolana from 'medusa-payment-streampay';
import { Solana } from 'solana-lib';
import { PublicKey } from '@solana/web3.js';

const streampayOptions = {
  secret_key: 'YOUR_STREAM_PAY_SECRET_KEY',
};

const solanaWalletAddress = 'YOUR_SOLANA_WALLET_ADDRESS';

const streampayProvider = new StreamPayPaymentProcessorWithSolana(container, streampayOptions);

// Add the provider to the Medusa payment provider registry
container.paymentProviderRegistry.register(streampayProvider);
```

Replace `'YOUR_STREAM_PAY_SECRET_KEY'` with your actual Stream Payments API secret key and `'YOUR_SOLANA_WALLET_ADDRESS'` with your Solana wallet address.

## Supported Cryptocurrencies

The Stream Payments provider supports the following cryptocurrencies:

- USDT
- EUROC
- SOL
- STRM Token
- 
- USDT
- Other SPL token-standard tokens or cryptocurrencies supported by Stream Payments.

## Example

Here's an example of how to initiate a payment using the Stream Payments provider:

```javascript
const payment = await streampayProvider.initiatePayment({
  amount: 100, // Amount in cents
  email: 'customer@example.com',
  currency_code: 'USDC', // Replace with the desired cryptocurrency code
  wallet_address: 'WALLET_PUBLIC_KEY', // Replace with the customer's Solana wallet address
});
```

## Contributing

Contributions to this Stream Payments provider for Medusa are welcome! If you find any issues, have suggestions for improvements, or want to add new features, feel free to open issues and pull requests in this repository.

## ToDo

Roadmap for the Stream Payments provider integration with Medusa e-Commerce stores. As we continue to enhance and expand the capabilities of this integration, here's what you can look forward to:

### Stream Payments Merchant Portal UI/UX

We are working on creating a dedicated Merchant Portal with a user-friendly and intuitive interface, inspired by Medusajs' admin UI. This portal will enable merchants to seamlessly manage their payments, view transaction history, and configure payment settings effortlessly.

### Functionalities

We are actively developing additional functionalities to enrich the payment experience for both merchants and customers. These functionalities will include features like order status tracking, automated payment confirmation, and seamless checkout processes.

### Solana Blockchain Implementation

Our team is dedicated to integrating the Solana blockchain into the payment flow. This implementation will provide secure and efficient transactions, utilizing Solana's cutting-edge blockchain technology.

### Web3.js Integration

Integrating Web3.js will open up a world of possibilities for our payment solution. By incorporating Web3.js, we'll ensure seamless interactions with Solana's smart contracts, enabling secure and transparent payment processing.

### Circle's USDC and EURO Stablecoin Payment Features

We are actively exploring the integration of Circle's USDC and EURO stablecoin payment features. This addition will provide merchants with the flexibility to accept stablecoin payments, enhancing the overall payment ecosystem.

### Technical Documentation and Architecture

We understand the importance of clear documentation and a well-structured architecture. Our team is committed to providing comprehensive technical documentation that outlines the integration process, payment flows, and best practices.

### Merchant Wallet and Fee Structure

To enhance merchant convenience, we're working on implementing a dedicated Merchant Wallet. This wallet will streamline payout processes and provide transparent insights into transaction fees and earnings.

### Reward System and Donation Options

We're excited to introduce a reward system that incentivizes both merchants and customers. Additionally, we're exploring options to enable seamless donations, empowering merchants and customers to contribute to meaningful causes.

We're excited about the progress we're making and the future enhancements that will bring even more value to the Stream Payments provider for Medusa e-Commerce stores.

Your feedback, suggestions, and contributions are invaluable as we work towards creating a robust and feature-rich payment solution. Join us in shaping the future of e-commerce payments with Stream Payments and Medusa!

## License

This project is licensed under the [MIT License](LICENSE).

```
