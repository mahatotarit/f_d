const main_networks = [
  [
    'Ethereum Mainnet',
    '1',
    'assets/image/network/mainnet/ethereum.svg',
    'Ethereum',
    [],
  ],
  [
    'Linea Mainnet',
    '59144',
    'assets/image/network/mainnet/linea.svg',
    'Linea',
    [],
  ],
  [
    'Arbitrum Mainnet',
    '42161',
    'assets/image/network/mainnet/arbitrum.svg',
    'Arbitrum',
    [],
  ],
  [
    'BNB Chain Mainnet',
    '56',
    'assets/image/network/mainnet/bnb.svg',
    'BNB',
    [],
  ],
  [
    'Base Mainnet',
    '8453',
    'assets/image/network/mainnet/base.svg',
    'Base',
    [],
  ],
  [
    'Polygon Mainnet',
    '137',
    'assets/image/network/mainnet/polygon.svg',
    'Polygon',
    [],
  ],
  [
    'Optimism Mainnet',
    '10',
    'assets/image/network/mainnet/optimism.svg',
    'Optimism',
    [],
  ],
  [
    'zkSync Era Mainnet',
    '324',
    'assets/image/network/mainnet/zksync.svg',
    'zkSync Era',
    [],
  ],
  ['opBNB (layer 2)', '204', 'assets/image/network/mainnet/opbnb.svg', 'opBNB'],
  [
    'Avalanche Mainnet',
    '43114',
    'assets/image/network/mainnet/avax.svg',
    'Avalanche',
    [],
  ],
  [
    'Fantom Mainnet',
    '250',
    'assets/image/network/mainnet/fantom.svg',
    'Fantom',
    [],
  ],
  [
    'Cronos Mainnet',
    '25',
    'assets/image/network/mainnet/cronos.svg',
    'Cronos',
    [],
  ],
];
const test_networks = [
  [
    'Ethereum Sepolia',
    '11155111',
    'assets/image/network/testnet/ethereum.svg',
    'Ethereum Sepolia',
    [],
  ],
  [
    'Linea Testnet',
    '59140',
    'assets/image/network/testnet/linea.svg',
    'Linea Testnet',
    [],
  ],
  [
    'Arbitrum Nova',
    '42170',
    'assets/image/network/testnet/arbitrum.svg',
    'Arbitrum Nova',
    [],
  ],
  [
    'Polygon Mumbai',
    '80001',
    'assets/image/network/testnet/polygon.svg',
    'Polygon Mumbai',
    [],
  ],
];

// ====================================================================
let first_time_fetch = true;
// auto fetch gasprice
async function auto_fetch_main_gas() {

  for (let i = 0; i < main_networks.length; i++) {
    let gas_price_result = await getGasPrice(main_networks[i][1]);
    main_networks[i][4] = gas_price_result;
  }

  stop_loadingc_c();
  set_main_content();
  
  setTimeout(() => {
    auto_fetch_main_gas();
  }, 1000);

  first_time_fetch = false;

}
auto_fetch_main_gas();

// ====================================================================
// auto fetch gasprice
async function auto_fetch_test_gas() {

  for (let i = 0; i < test_networks.length; i++) {
    let gas_price_result = await getGasPrice(test_networks[i][1]);
    test_networks[i][4] = gas_price_result;
  }

  set_test_content();
  
  setTimeout(() => {
    auto_fetch_test_gas();
  }, 1000);

}
auto_fetch_test_gas();

// ====================================================================
//price refresh time interval script
function auto_update_sec(){
  let update_sec_span = document.querySelector('#update_dy_sec');
  let update_sec = 15;

  function decrementUpdate_second() {
    if (update_sec === 0) {
      update_sec = 15;
      set_main_content();
      set_test_content();
    } else {
      update_sec--;
    }
    update_sec_span.innerHTML = update_sec;
  }

  
  const intervalId = setInterval(() => {
    decrementUpdate_second();
  }, 1000);

}
auto_update_sec();

// ====================================================================
let main_gas_tracker_section = document.querySelector('#main_net_gas_tracker_section');
let test_gas_tracker_section = document.querySelector('#test_net_gas_tracker_section',);

let section_main_data = ``;
let section_test_data = ``;

async function set_main_content(){
  let low_gas_fee;
  let ava_gas_fee;
  let high_gas_fee;
  let price_base;

    for (let i = 0; i < main_networks.length; i++) {
      if (Math.floor(main_networks[i][4].low.suggestedMaxFeePerGas) == 0) {
        low_gas_fee = 1;
      } else {
        low_gas_fee = Math.floor(main_networks[i][4].low.suggestedMaxFeePerGas);
      }

      ava_gas_fee = low_gas_fee+1;
      high_gas_fee = ava_gas_fee + 1;
      price_base = ava_gas_fee;

      section_main_data += `
        <div class="main_n_g_t_s_p_d">
            <div class="main_n_g_t_s_p_d_1">
                <img class="gas_network_img" src="${main_networks[i][2]}" alt="">
                <div class="gas_img_net_name">${main_networks[i][3]}</div>
            </div>

            <div class="main_n_g_t_s_p_d_2">
              <div id="divLow">
                <div class="gas_text_all_parent">
                  <h4 class="all_center mt_same gas_position_h4">
                    <img src="assets/image/imoji/smile3.webp" width="20px" />
                    Low
                  </h4>
                  <div id="divLowPrice" class="all_gas_price_div">
                    <div>
                      <div class="all_center mt_same low_gwei_gas_div" ><span id="spanLowPrice">${low_gas_fee}</span> gwei</div>
                      <div class="all_center mt_same">
                        <span class="spanLowPriorityAndBase">Base: ${price_base} | Priority: 1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="main_n_g_t_s_p_d_3">
              <div>
                <div class="gas_text_all_parent">
                  <h4 class="all_center mt_same gas_position_h4">
                    <img src="assets/image/imoji/smile2.webp" width="20px" />
                    Average
                  </h4>
                  <div id="divAvgPrice" class="all_gas_price_div">
                    <div>
                      <div class="all_center mt_same ava_gwei_gas_div" ><span id="spanAvgPrice">${ava_gas_fee}</span> gwei</div>
                      <div class="all_center mt_same">
                        <span class="spanProposePriorityAndBase">Base: ${price_base} | Priority: 1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="main_n_g_t_s_p_d_4">
              <div>
                <div class="gas_text_all_parent">
                  <h4 class="all_center mt_same gas_position_h4">
                    <img src="assets/image/imoji/smile1.webp" width="20px" />
                    High
                  </h4>
                  <div id="divHighPrice" class="all_gas_price_div">
                    <div>
                      <div class="all_center mt_same high_gwei_gas_div" > 
                        <span><span id="spanHighPrice">${high_gas_fee}</span> gwei</span>
                      </div>
                      <div class="all_center mt_same">
                        <span class="spanHighPriorityAndBase">Base: ${price_base} | Priority: 3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      `;
    }

    main_gas_tracker_section.innerHTML = section_main_data;
    section_main_data = ``;
}

async function set_test_content() {
  let low_gas_fee;
  let ava_gas_fee;
  let high_gas_fee;
  let price_base;

  for (let i = 0; i < test_networks.length; i++) {
    if (Math.floor(test_networks[i][4].low.suggestedMaxFeePerGas) == 0) {
      low_gas_fee = 1;
    } else {
      low_gas_fee = Math.floor(test_networks[i][4].low.suggestedMaxFeePerGas);
    }

    ava_gas_fee = low_gas_fee + 1;
    high_gas_fee = ava_gas_fee + 1;
    price_base = ava_gas_fee;

    section_test_data += `
        <div class="main_n_g_t_s_p_d">
            <div class="main_n_g_t_s_p_d_1">
                <img class="gas_network_img" src="${test_networks[i][2]}" alt="">
                <div class="gas_img_net_name">${test_networks[i][3]}</div>
            </div>

            <div class="main_n_g_t_s_p_d_2">
              <div id="divLow">
                <div class="gas_text_all_parent">
                  <h4 class="all_center mt_same gas_position_h4">
                    <img src="assets/image/imoji/smile3.webp" width="20px" />
                    Low
                  </h4>
                  <div id="divLowPrice" class="all_gas_price_div">
                    <div>
                      <div class="all_center mt_same low_gwei_gas_div" ><span id="spanLowPrice">${low_gas_fee}</span> gwei</div>
                      <div class="all_center mt_same">
                        <span class="spanLowPriorityAndBase">Base: ${price_base} | Priority: 1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="main_n_g_t_s_p_d_3">
              <div>
                <div class="gas_text_all_parent">
                  <h4 class="all_center mt_same gas_position_h4">
                    <img src="assets/image/imoji/smile2.webp" width="20px" />
                    Average
                  </h4>
                  <div id="divAvgPrice" class="all_gas_price_div">
                    <div>
                      <div class="all_center mt_same ava_gwei_gas_div" ><span id="spanAvgPrice">${ava_gas_fee}</span> gwei</div>
                      <div class="all_center mt_same">
                        <span class="spanProposePriorityAndBase">Base: ${price_base} | Priority: 1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="main_n_g_t_s_p_d_4">
              <div>
                <div class="gas_text_all_parent">
                  <h4 class="all_center mt_same gas_position_h4">
                    <img src="assets/image/imoji/smile1.webp" width="20px" />
                    High
                  </h4>
                  <div id="divHighPrice" class="all_gas_price_div">
                    <div>
                      <div class="all_center mt_same high_gwei_gas_div" > 
                        <span><span id="spanHighPrice">${high_gas_fee}</span> gwei</span>
                      </div>
                      <div class="all_center mt_same">
                        <span class="spanHighPriorityAndBase">Base: ${price_base} | Priority: 3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    `;
  }

  test_gas_tracker_section.innerHTML = section_test_data;
  section_test_data = ``;
}
// ==================================== loading Animation ===========================

function stop_loadingc_c(){
   clearInterval(loading_c_i);
   loadin_count_div.classList.add('d-none');
   loadin_count_div.classList.add('move');
}

let loadin_count_div = document.querySelector('.loading_main_div');
let count_l_c = 1;
function incthe_load_c() {
  loadin_count_div.innerHTML = `<h1 class="loading_count">${count_l_c}</h1>`;
  count_l_c++;
}

let loading_c_i = setInterval(() => {
  incthe_load_c();
}, 1000);

incthe_load_c();