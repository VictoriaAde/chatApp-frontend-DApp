import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import useRegisterENSName from "../hooks/useRegisterENSName";
import { Link } from "react-router-dom";

const RegisterENSName = () => {
  const [ENSName, setENSName] = useState("");
  const [ENSImage, setImageName] = useState("");

  const handleRegisterName = useRegisterENSName(ENSName, ENSImage);

  return (
    <Flex direction={"column"} align={"center"}>
      <Flex width={"400px"} direction={"column"} align={"center"}>
        <h2 className="s">Register </h2>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold" align={"left"}>
              ENS Name
            </Text>
            <TextField.Root
              value={ENSName}
              onChange={(e) => setENSName(e.target.value)}
              placeholder="Enter ENS Name"
            />
          </label>{" "}
          <label>
            <Text as="div" size="2" mb="1" weight="bold" align={"left"}>
              ENS Image
            </Text>
            <input
              type="file"
              name=""
              id=""
              value={ENSImage}
              onChange={(e) => setImageName(e.target.value)}
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Button variant="soft" color="gray">
            Cancel
          </Button>
          <Button className="text-black" onClick={handleRegisterName}>
            <Link to={`/login`} className="text-black">
              Register
            </Link>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default RegisterENSName;
