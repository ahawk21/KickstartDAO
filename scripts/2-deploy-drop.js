import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0xb47A005ba12024b79cF9dA06E51748C33E79E164");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      name: "KickstartDAO Membership",
      description: "A DAO for those wanting to support and help build the future.",
      image: readFileSync("scripts/assets/petpet.gif"),
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });
    
    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})()