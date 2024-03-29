import { ethers } from "ethers";
import ENSAbi from "./ENSAbi.json";
import chatAbi from "./chatAbi.json";

export const getENSContract = (providerOrSigner) =>
  new ethers.Contract(
    import.meta.env.VITE_ENS_contract_address,
    ENSAbi,
    providerOrSigner
  );

export const getChatContract = (providerOrSigner) =>
  new ethers.Contract(
    import.meta.env.VITE_chat_contract_address,
    chatAbi,
    providerOrSigner
  );
