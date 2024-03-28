import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";

const Messages = ({ sender, receiver, content, handleSendMessage }) => {
  return (
    <Card size="2" style={{ width: 425 }}>
      <Flex gap="" align="center">
        <Avatar size="4" radius="full" fallback={id} color="indigo" />
        <Box width={"100%"}>
          <Flex justify={"between"} align={"center"}>
            <div>Sender:{sender}</div>
            <div>Receiver:{receiver}</div>
            <div>content:{content}</div>
            {/* <button
              className="text-white bg-blue-600 py-1 px-4 rounded-md"
              onClick={() => handleSendMessage()}
            >
              Send Message
            </button> */}
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};

export default Messages;
