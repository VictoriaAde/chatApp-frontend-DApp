# ENS Chat DApp

This project implements a decentralized chat application on the Ethereum blockchain, leveraging the Ethereum Name Service (ENS) for user registration and identification.

## Components

- **ENS Contract:**
  - Registers users with their chosen ENS names.
  - Stores user profiles, including names and profile image URLs.
  - Deployed at: [ENS Contract Address on Mumbai Testnet] (https://mumbai.polygonscan.com/address/0x81cd3ee7dF9Cf837BC9e577ff0AaB63829741638)
  - Github Repo: [ENS Contract] (https://github.com/VictoriaAde/ethereum-name-service-contract)
- **Chat Contract:**
  - Enables peer-to-peer messaging between registered users.
  - Retrieves user information (names and images) from the ENS contract.
  - Deployed at: [Chat Contract Address on Mumbai Testnet] (https://mumbai.polygonscan.com/address/0xd67dfbA465c3aeA921B95266A0eBDB32228D2e90)
  - Github Repo: [Chat Contract] (https://github.com/VictoriaAde/chatApp-using-ENS)
- **Frontend:**
  - Connects to the ENS and Chat contracts using a Web3 library (e.g., MetaMask).
  - Provides a user-friendly interface for:
    - ENS Registration: Choose a unique ENS name and set a profile image URL.
    - Chat Functionality: View a list of registered users, initiate chats, and exchange messages.
    - Profile Management: Update your profile image URL or retrieve current information.
  - Utilizes IPFS for decentralized storage of profile images.
  - Live Demo: [Frontend Link] (https://chat-dapp-using-ens.vercel.app/)

## Tech Stack

- Solidity (Smart Contract Development)
- Ethers.js (Frontend Interaction with Blockchain)
- Web3Modal for wallet connectivity
- React
- IPFS (Decentralized Storage for Images)
