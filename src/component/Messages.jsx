import { Box, Card, Flex } from "@radix-ui/themes";

// eslint-disable-next-line react/prop-types
const Messages = ({ sender, receiver, content, align }) => {
  // Determine alignment based on the 'align' prop
  const messageAlignment = align === "start" ? "flex-start" : "flex-end";

  // Determine background color based on the sender
  const backgroundColor = align === "start" ? "bg-gray-100" : "bg-green-200";

  return (
    <Card
      size="2"
      style={{ width: 425 }}
      className={`my-2 ${messageAlignment}`}
    >
      <Flex gap="" align="center">
        <Box
          width={"100%"}
          className={backgroundColor}
          style={{ borderRadius: "10px" }}
        >
          <Flex justify={"between"} align={"center"} className="p-4">
            <div className="flex flex-col">
              <h4 className="font-normal">
                Sender: <span className="capitalize font-normal">{sender}</span>
              </h4>
              <h4>Receiver: {receiver}</h4>
              <h4>Content: {content}</h4>
            </div>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};

export default Messages;
