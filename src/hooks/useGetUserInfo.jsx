import { useEffect, useState } from "react";
import { getChatContract, getENSContract } from "../constants/contracts";
import { readOnlyProvider } from "../constants/providers";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

const useGetUserInfo = () => {
  const [userInfo, setUserInfo] = useState({
    loading: true,
    data: null,
  });
  const { address } = useWeb3ModalAccount();

  useEffect(() => {
    const contract = getChatContract(readOnlyProvider);
    const contractENS = getENSContract(readOnlyProvider);

    contract
      .getENSName(address)
      .then((ensName) => {
        contractENS
          .getUserInfo(ensName)
          .then(([ensName, image, userAddress]) => {
            // console.log("User Info:", { ensName, image, userAddress }); // Ensure logging as an object

            setUserInfo({
              loading: false,
              data: { ensName, image, userAddress },
            });
          })

          .catch((err) => {
            console.log(err);
            setUserInfo((prev) => ({ ...prev, loading: false }));
          });
      })
      .catch((err) => {
        console.log("error fetching ENS name: ", err);
        setUserInfo((prev) => ({ ...prev, loading: false }));
      });
  }, [address]);

  return userInfo;
};

export default useGetUserInfo;
