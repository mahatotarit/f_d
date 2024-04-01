const axios = require('axios');

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
