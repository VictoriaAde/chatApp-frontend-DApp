import { Box, Card, Flex } from "@radix-ui/themes";

// eslint-disable-next-line react/prop-types
const Messages = ({ sender, receiver, content }) => {
  return (
    <Card size="2" style={{ width: 425 }}>
      <Flex gap="" align="center">
        <Box width={"100%"}>
          <Flex justify={"between"} align={"center"}>
            <h4 className="font-normal">
              Sender: <span className="capitalize font-normal">{sender}</span>
            </h4>
            <h4>Receiver: {receiver}</h4>
            <h4>content: {content}</h4>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};

export default Messages;
