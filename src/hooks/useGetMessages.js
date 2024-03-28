import { useEffect, useState } from "react";
import { getChatContract } from "../constants/contracts";
import { readOnlyProvider } from "../constants/providers";
import { toast } from "react-toastify";

const useGetMessages = () => {
  const [messages, setMessages] = useState({
    loading: true,
    data: [],
  });
  console.log("messages in hooks", messages);

  useEffect(() => {
    const contract = getChatContract(readOnlyProvider);

    contract
      .getSentMessages()
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
  }, []);

  return messages;
};

export default useGetMessages;
