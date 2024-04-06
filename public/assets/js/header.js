async function header(){

  let aside_parent_div = document.querySelector('#aside_parent');
  // close side bar fun
  let close_sidebar_btn = document.querySelector('.aside_close_button');
  close_sidebar_btn.addEventListener('click',close_side_bar);
  function close_side_bar(){
    aside_parent_div.classList.remove('open_side_bar');
  }

  // open side bar fun
  let open_side_bar_btn = document.querySelector('#open_side_bar_three_line');
  open_side_bar_btn.addEventListener('click',open_side_bar);
  function open_side_bar(){
    aside_parent_div.classList.add('open_side_bar');
  }

  // close side bar when user click white space of aside_parent div
  document.getElementById('aside_parent').addEventListener('click', function (event) {
      if (event.target === this) { aside_parent_div.classList.remove('open_side_bar'); }
  });



  // ================================================================================

    let connect_wallet_modal = document.querySelector('#connect_wallet_modal');
    // close connect modal bar fun
    let connect_modal_close_button = document.querySelector('.connect_modal_close_button');
    connect_modal_close_button.addEventListener('click', close_connect_modal_bar);
    function close_connect_modal_bar() {
      connect_wallet_modal.classList.remove('open_connect_modal');
    }

    // open connect modal bar fun
    let open_connect_modal_btn = document.querySelector('#open_connect_modal_btn',);
    open_connect_modal_btn.addEventListener('click', close_connect_modal_box);
    function close_connect_modal_box() {
      connect_wallet_modal.classList.add('open_connect_modal');
    }

    // close side bar when user click white space of aside_parent div
    connect_wallet_modal.addEventListener('click', function (event) {
      if (event.target === this) {
        aside_parent_div.classList.remove('open_connect_modal');
      }
    });

  
}