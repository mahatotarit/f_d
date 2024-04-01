// mainnet and testnet gas price section switch 
let main_net_gas_tracker_section = document.querySelector('#main_net_gas_tracker_section');
let test_net_gas_tracker_section = document.querySelector('#test_net_gas_tracker_section');

let testnet_mainnet_radio_btn = document.querySelectorAll('.network_select_radio');
testnet_mainnet_radio_btn.forEach(element => {
    element.addEventListener('input',async function(){
       if(element.id.toLowerCase() == "mainnet"){
         if(main_net_gas_tracker_section.classList.contains('hide')){
            main_net_gas_tracker_section.classList.remove('hide');
            test_net_gas_tracker_section.classList.add('hide');
         }else{
            main_net_gas_tracker_section.classList.add('hide');
            test_net_gas_tracker_section.classList.remove('hide');
         }
       }else{
          if (test_net_gas_tracker_section.classList.contains('hide')) {
              test_net_gas_tracker_section.classList.remove('hide');
              main_net_gas_tracker_section.classList.add('hide');
          }else{
              test_net_gas_tracker_section.classList.add('hide');
              main_net_gas_tracker_section.classList.remove('hide');
          }
       }
    });
});