import { network, ethers } from 'hardhat';
import { ParamType, keccak256 } from 'ethers/lib/utils';
import Web3 from 'web3';

import addressInfo from './addressInfo.json';

function encodeParameters(
  types: Array<string | ParamType>,
  values: Array<any>
) {
  const abi = new ethers.utils.AbiCoder();
  return abi.encode(types, values);
}

async function main() {

    let web3 = new Web3(Web3.givenProvider);
    const [operator] = await ethers.getSigners();

    var batchRequest = new web3.BatchRequest();

    for(const e of addressInfo) {
        const contract = await ethers.getContractAt('DyDAI', '0xe5f50b22eb3b88b717b4292e591f4394e57f7f6a');
        let tx
        tx = await contract.connect(operator).transfer(e.address, e.amount)
        console.log(tx);
    }
    let t = batchRequest.execute()
    console.log(t);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
