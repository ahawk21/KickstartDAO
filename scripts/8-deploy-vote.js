import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule(
  "0xb47A005ba12024b79cF9dA06E51748C33E79E164",
);

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
      name: "KickstartDAO's Proposals",
      votingTokenAddress: "0x0724Ad334c4136f05cD3ee94FE70f70DD46A9752",
      proposalStartWaitTimeInSeconds: 0,
      proposalVotingTimeInSeconds: 24 * 60 * 60,
      votingQuorumFraction: 0,
      minimumNumberOfTokensNeededToPropose: "0",
    });

    console.log(
      "✅ Successfully deployed vote module, address:",
      voteModule.address,
    );
  } catch (err) {
    console.log("Failed to deploy vote module", err);
  }
})();