# Crypto Portfolio App

![demo](https://github.com/user-attachments/assets/a67428dc-53a2-4166-bd12-b98163373d99)

## Introduction

Crypto Portfolio App - A single-page application (SPA) built with React that allows users to track cryptocurrency exchange rates in real time. Data updates via a WebSocket connection to the Binance server, ensuring instant price updates.

Test task for the position of "Frontend Developer (React)" (Matrix, Cheremisov Grigory)

## Features

- Connects to Binance WebSocket API to receive real-time exchange rates.
- Add currencies with a selected quantity.
- Displays details: name, quantity, price, total value, 24h change, portfolio share.
- Remove assets with a click.
- Automatically updates prices via WebSocket.
- Saves data in LocalStorage and restores it on page reload.

## Technologies

- React
- TypeScript
- Redux Toolkit
- RTK Query
- SCSS
- Vite
- WebSockets
- LocalStorage

## Getting Started

To install and use the project, follow these steps:

### Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory in the terminal.
3. Run the following command to install dependencies:

```sh
  npm install
```

<br/>

### Usage

To start the development server, use the following command:

```sh
  npm run dev
```

Visit the provided local URL in your browser to explore the "Crypto Portfolio App" application.

<br/>

### Build

For a production build, run the following command:

```sh
  npm run build
```
