import { ContractFactory } from "@ethersproject/contracts";
import { Wallet } from "@ethersproject/wallet";
import { JsonRpcProvider } from "@ethersproject/providers";
import test from "./test_evm.json" assert { type: "json" };

const provider = new JsonRpcProvider("http://localhost:3050");
const wallet = new Wallet("0x7726827caac94a7f9e1b160f7ea819f172f7b6f9d2a97f992c38edeab82d4110", provider, null);
const contractFactory = new ContractFactory(test.contracts["test.sol:SimpleStorage"].abi, test.contracts["test.sol:SimpleStorage"].bin, wallet)
const contract = await contractFactory.deploy();
await contract.deployed();
await (await contract.set(42)).wait();
let res = await(await contract.get()).wait();
console.log(res)
