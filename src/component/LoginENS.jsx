import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import useLoginENS from "../hooks/useLoginENS";
import { Link } from "react-router-dom";

const LoginENS = () => {
  const [ENSName, setENSName] = useState("");

  const handleLogin = useLoginENS(ENSName);

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button className="s">Login</Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Login in with your ENS name </Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Login
        </Dialog.Description>

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
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Button className="text-black" onClick={handleLogin}>
            <Link to={`/chat-app`} className="text-black">
              Login
            </Link>
          </Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default LoginENS;
