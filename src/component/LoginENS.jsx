import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import useLoginENS from "../hooks/useLoginENS";
import { Link } from "react-router-dom";

const LoginENS = () => {
  const [ENSName, setENSName] = useState("");

  const handleLogin = useLoginENS(ENSName);

  return (
    <Flex direction={"column"} align={"center"}>
      <Flex width={"400px"} direction={"column"} align={"center"}>
        <h2 className="s">Login</h2>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              ENS Name
            </Text>
            <TextField.Root
              value={ENSName}
              onChange={(e) => setENSName(e.target.value)}
              placeholder="Enter ENS Name"
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Button variant="soft" color="gray">
            Cancel
          </Button>
          <Button className="text-black" onClick={handleLogin}>
            <Link to={`/chat-app`} className="text-black">
              Login
            </Link>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LoginENS;
