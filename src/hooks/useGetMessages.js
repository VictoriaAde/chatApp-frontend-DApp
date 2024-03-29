import { useEffect, useState } from "react";
import { getChatContract } from "../constants/contracts";
import { readOnlyProvider } from "../constants/providers";
import { toast } from "react-toastify";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

const useGetMessages = () => {
  const [messages, setMessages] = useState({
    loading: true,
    data: [],
  });
  console.log("messages in hooks", messages);

  const { address } = useWeb3ModalAccount();
  console.log(address);

  useEffect(() => {
    const contract = getChatContract(readOnlyProvider);

    contract
      .getENSName(address)
      .then((ensName) => {
        contract
          .getSentMessages(ensName)
          .then((res) => {
            console.log("response", res);
            const messageData = res.map((item) => ({
              content: item.content,
              sender: item.sender,
              recipient: item.recipient,
              timestamp: item.timestamp,
            }));

            console.log("messageData", {
              data: messageData,
            });

            setMessages({
              loading: false,
              data: messageData,
            });
          })
          .catch((err) => {
            toast.error("error fetching: ", err);
            setMessages((prev) => ({ ...prev, loading: false }));
          });
      })
      .catch((err) => {
        toast.error("error fetching ENS name: ", err);
        setMessages((prev) => ({ ...prev, loading: false }));
      });
  }, [address]);

  return messages;
};

export default useGetMessages;
