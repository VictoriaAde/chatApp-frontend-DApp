import { Flex } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./index.css";
import useGetMessages from "./hooks/useGetMessages";
import Messages from "./component/Messages";
import SendMessage from "./component/SendMessage";

function App() {
  const { loading, data: messages } = useGetMessages();
  console.log("messages", messages);

  return (
    <main className="p-8">
      <h1>ChatDApp</h1>

      <Flex wrap={"wrap"} gap={"6"}>
        {loading ? (
          <h3>Loading...</h3>
        ) : messages.length !== 0 ? (
          messages.map((index, item) => (
            <Messages
              key={index}
              sender={item.sender}
              receiver={item.recipient}
              content={item.content}
            />
          ))
        ) : (
          <h5>Could not get messages!!</h5>
        )}
      </Flex>

      <div>
        <SendMessage />
      </div>
    </main>
  );
}

export default App;
