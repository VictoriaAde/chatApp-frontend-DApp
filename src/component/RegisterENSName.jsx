import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import useRegisterENSName from "../hooks/useRegisterENSName";
import { Link } from "react-router-dom";

const RegisterENSName = () => {
  const [ENSName, setENSName] = useState("");

  const handleRegisterName = useRegisterENSName(ENSName);

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button className="s">Register your ENS Name</Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Register Name</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Register ENS Name
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
          <Button className="text-black" onClick={handleRegisterName}>
            <Link to={`/chat-app`} className="text-black">
              Register
            </Link>
          </Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default RegisterENSName;
