# Deploy & Test

```
1. 在contracts目录下添加对应的solidity源代码
2. 修改hardhat.config.ts的配置和solidity版本号
3. 修改.env的配置
4. 修改multisend.ts 23行对应的合约地址
5. 修改addressInfo.json，填上相应的地址和金额（金额是uint单位）
6. 执行命令 npx hardhat run scripts/multisend.ts --network kovan
