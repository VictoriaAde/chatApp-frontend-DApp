import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import useSendMessage from "../hooks/useSendMessage";

const SendMessage = () => {
  const [ENSName, setENSName] = useState("");
  const [content, setContent] = useState("");

  const handleSendMessage = useSendMessage(ENSName, content);

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button className="s">Send Message</Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Send Message</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Send Message
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
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Message Content
            </Text>
            <TextField.Root
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter Message"
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Button className="text-black" onClick={handleSendMessage}>
            Send
          </Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default SendMessage;
