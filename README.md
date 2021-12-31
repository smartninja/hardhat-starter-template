# SmartNinja Hardhat Starter Template

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
```

## .env

Rename `.env-template` into `.env` and enter a deployer private key. 

The deployer address should be only used for deploying smart contracts and should never be assigned an owner role (or any other role). Neither should it ever hold significant amounts of coins/tokens.

## Deployment

Run this command to deploy smart contract to the selected network (in this case Rinkeby Testnet).

```
npx hardhat run scripts/deployment.js --network rinkeby
```

## Verify the contract on Etherscan

Enter your Etherscan API key into .env (`VERIFY_API_KEY`).

```
npx hardhat verify --network rinkeby 0xEnterContractAddress
```
