import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import useRegisterENSName from "../hooks/useRegisterENSName";
import { Link } from "react-router-dom";

const RegisterENSName = () => {
  const [ENSName, setENSName] = useState("");
  const [cid, setCid] = useState("");

  const handleRegister = useRegisterENSName(
    ENSName,
    `${import.meta.env.VITE_GATEWAY_URL}/ipfs/${cid}`
  );

  const changeHandler = async (e) => {
    await handleSubmission(e.target.files[0]);
  };

  const handleSubmission = async (fileToUpload) => {
    try {
      const formData = new FormData();
      formData.append("file", fileToUpload);
      const metadata = JSON.stringify({
        name: "File name",
      });
      formData.append("pinataMetadata", metadata);

      const options = JSON.stringify({
        cidVersion: 0,
      });
      formData.append("pinataOptions", options);

      const res = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
          },
          body: formData,
        }
      );

      const resData = await res.json();
      setCid(resData.IpfsHash);
      console.log(resData.IpfsHash);
    } catch (e) {
      console.log(e);
      alert("Trouble uploading file");
    }
  };
  // resData.IpfsHash QmXg8DRYJf4bbtzvK8BKySKVnRL5YBoEsJUU1ir9F6CWZg
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
            <input type="file" onChange={changeHandler} />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Button className="text-black" onClick={handleRegister}>
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
