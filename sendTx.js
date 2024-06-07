import Web3 from "web3";
const web3 = new Web3('http://localhost:3050'); // Replace with your Infura project ID or another Ethereum node provider

const fromAddress = '0x36615Cf349d7F6344891B1e7CA7C72883F5dc049';
const privateKey = '0x7726827caac94a7f9e1b160f7ea819f172f7b6f9d2a97f992c38edeab82d4110'; // Make sure to keep your private key secure and never expose it in your code
const toAddress = '0xe4C7fBB0a626ed208021ccabA6Be1566905E2dFc';
const data = "0xac9650d8000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000002c0000000000000000000000000000000000000000000000000000000000000008413ead5620000000000000000000000005e6d086f5ec079adff4fb3774cdf3e8d6a34f7e9000000000000000000000000979f9e8cb1140b6ffded4b21bd3552eebe6a40d400000000000000000000000000000000000000000000000000000000000001f40000000000000000000000000000000000000000004188636702d772ecd54057000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000164883164560000000000000000000000005e6d086f5ec079adff4fb3774cdf3e8d6a34f7e9000000000000000000000000979f9e8cb1140b6ffded4b21bd3552eebe6a40d400000000000000000000000000000000000000000000000000000000000001f4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2761a00000000000000000000000000000000000000000000000000000000000d89e60000000000000000000000000000000000000000000000000de11072e7d7c16e000000000000000000000000000000000000000000000000000000e8d4a510000000000000000000000000000000000000000000000000000dd836face08b9c5000000000000000000000000000000000000000000000000000000e83f72495b00000000000000000000000036615cf349d7f6344891b1e7ca7c72883f5dc049000000000000000000000000000000000000000000000000000000006663581200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000412210e8a00000000000000000000000000000000000000000000000000000000";
const value = '0xe8d4a51000'; // This is in hex (10000000000000 in decimal, which is 0.01 ether)

const tx = {
    from: fromAddress,
    to: toAddress,
    value: value,
    data: data,
    gas: 2100000, // You might need to adjust the gas limit depending on your transaction
    gasPrice: web3.utils.toWei('10', 'gwei'), // You can adjust the gas price as needed
};

async function sendTransaction() {
    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
    web3.eth.sendSignedTransaction(signedTx.rawTransaction)
        .on('receipt', console.log)
        .on('error', console.error);
}

sendTransaction();