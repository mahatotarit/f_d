const gas_infura_api = '13d9b7d0ef994b09840355a7ed0e406a';
const gas_infura_sec = 'K+LmU7ijS9Gc7ac6oQBcWl8cAIrkxdhaP5ew5q4YjeVO+/xCacoUiw';
const token = gas_infura_api + ':' + gas_infura_sec;
const Auth = btoa(token);

async function getGasPrice(network_id) {
  try {
    const response = await fetch(
      `https://gas.api.infura.io/networks/${network_id}/suggestedGasFees`,
      {
        headers: {
          Authorization: `Basic ${Auth}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Server responded with:', error);
  }
}

