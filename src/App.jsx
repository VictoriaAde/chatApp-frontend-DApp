import { Flex } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./index.css";
import useGetMessages from "./hooks/useGetMessages";
import Messages from "./component/Messages";
import SendMessage from "./component/SendMessage";
import LoadingSpinner from "./component/LoadingSpinner/LoadingSpinner";

function App() {
  const { loading, sent, received } = useGetMessages();
  console.log("messages", sent, received);

  const currentUser = sent.length > 0 ? sent[0].sender : "Guest";

  return (
    <main className="p-8">
      <h1>ChatDApp</h1>
      <p className="capitalize">
        Hello <span className="uppercase">{currentUser}</span>, welcome back!
      </p>

      <Flex wrap={"wrap"} gap={"6"} direction={"column"} align={"center"}>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <Flex>
            <div>
              <h4 className="text-xs ">Sent Messages</h4>
              {sent.map((item, index) => (
                <Messages
                  key={`sent-${index}`}
                  sender={item?.sender}
                  receiver={item?.recipient}
                  content={item?.content}
                />
              ))}
            </div>
            <div>
              <h4>Received Messages</h4>
              {received.map((item, index) => (
                <Messages
                  key={`received-${index}`}
                  sender={item?.sender}
                  receiver={item?.recipient}
                  content={item?.content}
                />
              ))}
            </div>
          </Flex>
        )}

        <SendMessage />
      </Flex>
    </main>
  );
}

export default App;
