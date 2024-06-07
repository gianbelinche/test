import { Wallet, Provider, utils, ContractFactory } from "zksync-web3";
import test from "./test.json" assert { type: "json" };

console.log(test)
const provider = new Provider("http://localhost:3050");
const wallet = new Wallet("0x7726827caac94a7f9e1b160f7ea819f172f7b6f9d2a97f992c38edeab82d4110", provider, null);
const contractFactory = new ContractFactory(test.contracts["test.sol:SimpleStorage"].abi, test.contracts["test.sol:SimpleStorage"].bin, wallet)
const contract = await contractFactory.deploy();
await contract.deployed();
await contract.get();


