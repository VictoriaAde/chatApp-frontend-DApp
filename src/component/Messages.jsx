import { Box, Card, Flex, Text } from "@radix-ui/themes";

// eslint-disable-next-line react/prop-types
const Messages = ({ sender, receiver, content }) => {
  return (
    <Card size="2" style={{ width: 425 }}>
      <Flex gap="" align="center">
        <Box width={"100%"}>
          <Flex justify={"between"} align={"center"}>
            <Text>Sender:{sender}</Text>
            <Text>Receiver:{receiver}</Text>
            <Text>content:{content}</Text>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};

export default Messages;
