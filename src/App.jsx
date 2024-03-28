import { configureWeb3Modal } from "./connection";
import Header from "./component/Header";
import RegisterENSName from "./component/RegisterENSName";
import "./index.css";
import useGetMessages from "./hooks/useGetMessages";
import { useState } from "react";
import Messages from "./component/Messages";
import { Flex } from "@radix-ui/themes";

configureWeb3Modal();

function App() {
  const [name] = useState();
  const { loading, data: messages } = useGetMessages(name);

  return (
    <>
      <main className="px-8">
        <Header />
        <div>
          <RegisterENSName />
        </div>

        <Flex wrap={"wrap"} gap={"6"}>
          {loading ? (
            <h3>Loading...</h3>
          ) : messages.length !== 0 ? (
            messages.map((item, index) => (
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
    </>
  );
}

export default App;
