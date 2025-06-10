import { PublicKey } from "@solana/web3.js";

export type PriceFeedPrice = {
  price: number;
  conf: number;
  expo: number;
  publishTime: number;
};

export type PriceFeed = {
  id: PublicKey;
  price?: PriceFeedPrice;
  emaPrice?: PriceFeedPrice;
  metadata: {
    slot: number;
    proofAvailableTime: number;
    prevPublishTime: number;
  };
};
