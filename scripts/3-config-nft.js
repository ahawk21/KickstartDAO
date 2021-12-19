import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x006E74d88e8D87e0EA7167BF57e80f92063a8d53",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "KickstartNFT",
        description: "This NFT will give you access to KickstartDAO!",
        image: readFileSync("scripts/assets/petpet.gif"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()