const axios = require('axios');

const networks = [
  ['Arbitrum Mainnet', '42161'],
  ['Arbitrum Nova', '42170'],
  ['Avalanche Mainnet', '43114'],
  ['Base Mainnet', '8453'],
  ['BNB Chain Mainnet', '56'],
  ['opBNB (layer 2)', '204'],
  ['Cronos Mainnet', '25'],
  ['Ethereum Mainnet', '1'],
  ['Ethereum Goerli', '5'],
  ['Ethereum Sepolia', '11155111'],
  ['Fantom Mainnet', '250'],
  ['Filecoin Mainnet', '314'],
  ['Linea Mainnet', '59144'],
  ['Linea Testnet', '59140'],
  ['Optimism Mainnet', '10'],
  ['Polygon Mainnet', '137'],
  ['Polygon Mumbai', '80001'],
  ['zkSync Era Mainnet', '324'],
];


const Auth = Buffer.from('13d9b7d0ef994b09840355a7ed0e406a' +':' +'K+LmU7ijS9Gc7ac6oQBcWl8cAIrkxdhaP5ew5q4YjeVO+/xCacoUiw',).toString('base64');
require('events').EventEmitter.defaultMaxListeners = 1000;

async function getGasPrice(network_id) {
  try {
    const { data } = await axios.get(`https://gas.api.infura.io/networks/${network_id}/suggestedGasFees`,
    {headers: {Authorization: `Basic ${Auth}`}});
    return data;
  } catch (error) {
    console.log('Server responded with:', error);
  }
}
console.log(getGasPrice(networks[5][1]))