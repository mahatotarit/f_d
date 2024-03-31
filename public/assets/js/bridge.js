async function bridge_modal(){
  // open network fee details
  let open_net_fee_details = document.querySelector(
    '.open_network_fee_de_i_img',
  );
  open_net_fee_details.addEventListener('click', open_net_fee_details_fun);
  function open_net_fee_details_fun() {
    document.querySelector('.net_fee_details').classList.toggle('open_net_fee');
  }

  // ======================= modal script =================================
  // open coin list modal box
  let bridge_modal_parent_div = document.querySelector(
    '#bridge_coin_modal_parent_div',
  );
  let coin_select_div = document.querySelector('#coin_select_div');

  coin_select_div.addEventListener('click', open_coin_list_modal_fun);
  function open_coin_list_modal_fun() {
    bridge_modal_parent_div.classList.toggle('open_coin_list_modal');
  }
  //close modal box coin
  let modal_close_icon = document.querySelector('#coin_modal_close_icon');
  modal_close_icon.addEventListener('click', open_coin_list_modal_fun);

  //  ==========================================
  // open from network list modal box
  let bridge_from_network_modal_parent_div = document.querySelector(
    '#bridge_from_network_modal_parent_div',
  );
  let from_network_select_div = document.querySelector(
    '#from_network_select_div',
  );

  from_network_select_div.addEventListener('click', open_from_network_fun);
  function open_from_network_fun() {
    bridge_from_network_modal_parent_div.classList.toggle(
      'open_coin_list_modal',
    );
  }
  //close modal box coin
  let from_network_modal_close_icon = document.querySelector(
    '#from_network_modal_close_icon',
  );
  from_network_modal_close_icon.addEventListener(
    'click',
    open_from_network_fun,
  );

  //  ==========================================
  // open to network list modal box
  let bridge_to_network_modal_parent_div = document.querySelector(
    '#bridge_to_network_modal_parent_div',
  );
  let to_network_select_div = document.querySelector('#to_network_select_div');

  to_network_select_div.addEventListener('click', open_to_network_fun);
  function open_to_network_fun() {
    bridge_to_network_modal_parent_div.classList.toggle('open_coin_list_modal');
  }
  //close modal box coin
  let to_network_modal_close_icon = document.querySelector(
    '#to_network_modal_close_icon',
  );
  to_network_modal_close_icon.addEventListener('click', open_to_network_fun);
}

