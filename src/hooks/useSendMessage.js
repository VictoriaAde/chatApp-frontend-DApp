import { useCallback } from "react";
import { isSupportedChain } from "../utils";
// import { isAddress } from "ethers";
import { getProvider } from "../constants/providers";
import { getChatContract } from "../constants/contracts";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { toast } from "react-toastify";

const useSendMessage = (recipientENSName, content) => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(async () => {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const contract = getChatContract(signer);

    try {
      const transaction = await contract.sendMessage(recipientENSName, content);
      console.log("transaction: ", transaction);
      const receipt = await transaction.wait();

      console.log("receipt: ", receipt);

      if (receipt.status) {
        return console.log("Message sent successfully!");
      }

      toast.error("Message sending failed!");
    } catch (error) {
      console.log(error);
      //   let errorText;
      //   if (error.reason === "Has no right to vote") {
      //     errorText = "You have not right to vote";
      //     toast.error("You have not right to vote");
      //   } else if (error.reason === "Already voted.") {
      //     errorText = "You have already voted";
      //     toast.error("You have already voted");
      //   } else {
      //     errorText = "An unknown error occurred";
      //     toast.error("An unknown error occurred");
      //   }

      console.error("error: ", error);
    }
  }, [chainId, content, recipientENSName, walletProvider]);
};

export default useSendMessage;
