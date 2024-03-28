import { SUPPORTED_CHAIN } from "../connection";
import { getChatContract } from "../constants/contracts";
import { getProvider } from "../constants/providers";

export const isSupportedChain = (chainId) =>
  Number(chainId) === SUPPORTED_CHAIN;

export const getReadWriteChatContract = async (provider) => {
  const readWriteProvider = getProvider(provider);

  const signer = await readWriteProvider.getSigner();

  return getChatContract(signer);
};
