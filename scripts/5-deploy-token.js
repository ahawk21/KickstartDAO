import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0xb47A005ba12024b79cF9dA06E51748C33E79E164");

(async () => {
  try {
    const tokenModule = await app.deployTokenModule({
      name: "KickstartDAO Governance Token",
      symbol: "KDAO",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();