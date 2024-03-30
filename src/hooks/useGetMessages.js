import { useEffect, useState } from "react";
import { getChatContract } from "../constants/contracts";
import { readOnlyProvider } from "../constants/providers";
// import { toast } from "react-toastify";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

const useGetMessages = () => {
  const [messages, setMessages] = useState({
    loading: true,
    sent: [],
    received: [],
  });

  const { address } = useWeb3ModalAccount();

  useEffect(() => {
    const contract = getChatContract(readOnlyProvider);

    contract
      .getENSName(address)
      .then((ensName) => {
        contract
          .getMessages(ensName)
          .then(([sentMessages, receivedMessages]) => {
            // console.log("response", sentMessages, receivedMessages);
            const sentMessageData = sentMessages.map((item) => ({
              content: item.content,
              sender: item.sender,
              recipient: item.recipient,
              timestamp: item.timestamp,
            }));

            const receivedMessageData = receivedMessages.map((item) => ({
              content: item.content,
              sender: item.sender,
              recipient: item.recipient,
              timestamp: item.timestamp,
            }));

            setMessages({
              loading: false,
              sent: sentMessageData,
              received: receivedMessageData,
            });
          })

          .catch((err) => {
            console.log(err);
            setMessages((prev) => ({ ...prev, loading: false }));
          });
      })
      .catch((err) => {
        console.log("error fetching ENS name: ", err);
        setMessages((prev) => ({ ...prev, loading: false }));
      });
  }, [address]);

  return messages;
};

export default useGetMessages;
