import { Flex } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./index.css";
import useGetMessages from "./hooks/useGetMessages";
import Messages from "./component/Messages";
import SendMessage from "./component/SendMessage";
import LoadingSpinner from "./component/LoadingSpinner/LoadingSpinner";

function App() {
  const { loading, data: messages } = useGetMessages();
  console.log("messages", messages);

  return (
    <main className="p-8">
      <h1>ChatDApp</h1>

      <Flex wrap={"wrap"} gap={"6"} direction={"column"} align={"center"}>
        {messages.length === 0
          ? !loading && <LoadingSpinner />
          : messages.map((item, index) => (
              <Messages
                key={index}
                sender={item?.sender}
                receiver={item?.recipient}
                content={item?.content}
              />
            ))}
        <SendMessage />
      </Flex>
    </main>
  );
}

export default App;
