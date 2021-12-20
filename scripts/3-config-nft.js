import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xf9951DA591932cA5FDc2781993420e60b8EBd6d1",
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