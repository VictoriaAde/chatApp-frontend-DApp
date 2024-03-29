import { Flex } from "@radix-ui/themes";
// import { configureWeb3Modal } from "./connection";
// import Header from "./component/Header";
// import RegisterENSName from "./component/RegisterENSName";
import "@radix-ui/themes/styles.css";
import "./index.css";
import useGetMessages from "./hooks/useGetMessages";
import Messages from "./component/Messages";

function App() {
  const { loading, data: messages } = useGetMessages();
  console.log("messages", messages);

  return (
    <main className="p-8">
      {/* <Header /> */}
      {/* <div>
          <RegisterENSName />
        </div> */}
      <div>ChatDApp</div>

      <Flex wrap={"wrap"} gap={"6"}>
        {loading ? (
          <h3>Loading...</h3>
        ) : messages.length !== 0 ? (
          messages.map((index, item) => (
            <Messages
              key={index}
              sender={item.name}
              receiver={item.sender}
              content={item.content}
            />
          ))
        ) : (
          <h5>Could not get messages!!</h5>
        )}
      </Flex>
    </main>
  );
}

export default App;
