import React from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/guide/ThirdwebGuideFooter";
import "../styles/globals.css";
import { AppProps } from "next/app";

// This is the chain your dApp will work on.
const activeChain = "binance";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <Head>
        <title>Domino toys NFT</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="domino nft's official Repository to Showcase the token drop contract, including claim and transfer features."
        />
        <meta
          name="keywords"
          content="domino nft's  drop, domino nft's token transfer, domino nft's token claim, domino nft's token claim phases"
        />
      </Head>
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
//da terminal rannare i 2 comandi sotto; port3000
//npm install
//yarn run dev