import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import { getChatContract } from "../constants/contracts";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { toast } from "react-toastify";

const useLoginENS = (name) => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(async () => {
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
        return toast.success("registration successful!");
      }

      console.log("registration failed!");
    } catch (error) {
      toast.error(error);
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
  }, [chainId, walletProvider, name]);
};

export default useLoginENS;
