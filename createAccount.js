// sendEther.js

const optionDefinitions = [
    { name: "infuraFileToken", type: String },
    { name: "privateKey", type: String }, // add private argument (private key는 코드안에 직접 집어넣지 않고 따로 파일을 만들어서 fs모듈로 불러왔습니다.)
  ]
  
  const commandLineArgs = require("command-line-args")
  const options = commandLineArgs(optionDefinitions)
  
  var Web3 = require("web3")
  var fs = require("fs")
  var Tx = require("ethereumjs-tx") // ethereumjs-tx version 1.3.7 사용. (최신 버전을 사용할 경우에는 constructor 관련 에러와 invalid sender 에러가 떠서 버전 수정하였습니다.)
  var infura_token = fs.readFileSync(options.infuraFileToken, "utf8")
  var private_key = fs.readFileSync(options.privateKey, "utf8")
  var node_host = `https://ropsten.infura.io/v3/${infura_token}`
  
  var web3 = new Web3(node_host)
  
  const send_account = "0xF2050Aa76D860167e35D4b34CDB4Ccc841d215F6" // send account
  const receive_account = "0x8A2fd42c47C41888FaA695cd3272Ca0B048a2eA7" //  receiver account
  
  const privateKeyBuffer = Buffer.from(private_key, "hex")