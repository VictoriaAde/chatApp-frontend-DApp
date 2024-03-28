import React, { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";

import { getChatContract } from "../constants/contracts";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";

const useRegisterENSName = () => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(
    async (name) => {
      if (!isSupportedChain(chainId)) return console.error("Wrong network");
      const readWriteProvider = getProvider(walletProvider);
      const signer = await readWriteProvider.getSigner();

      const contract = getChatContract(signer);

      try {
        const transaction = await contract.registerENSName(name);
        console.log("transaction: ", transaction);
        const receipt = await transaction.wait();

        console.log("receipt: ", receipt);

        if (receipt.status) {
          return console.log("registration successfull!");
        }

        console.log("registration failed!");
      } catch (error) {
        console.log(error);
        // let errorText;
        // if (error.reason === "Has no right to vote") {
        //   errorText = "You have not right to vote";
        // } else if (error.reason === "Already voted.") {
        //   errorText = "You have already voted";
        // } else {
        //   errorText = "An unknown error occured";
        // }

        // console.error("error: ", errorText);
      }
    },
    [chainId, walletProvider]
  );
};

export default useRegisterENSName;
