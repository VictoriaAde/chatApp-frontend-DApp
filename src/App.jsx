import { Container, Flex } from "@radix-ui/themes";
import { configureWeb3Modal } from "./connection";
import Header from "./component/Header";
import RegisterENSName from "./component/RegisterENSName";
import "@radix-ui/themes/styles.css";
import "./index.css";
import useGetMessages from "./hooks/useGetMessages";
import { useState } from "react";
import Messages from "./component/Messages";

configureWeb3Modal();

function App() {
  const [name] = useState();
  const { loading, data: messages } = useGetMessages(name);

  return (
    <Container>
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
    </Container>
  );
}

export default App;
