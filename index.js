
const cartHeader = document.getElementById('cart-header');
const cart = document.getElementById('cart');

const overlay = document.getElementById('overlay');
//const menuMobileCloseBtn = document.getElementById('menu-mobile-close-btn');
const menuMobile = document.getElementById('menuMobile');
const header = document.getElementById('header');

// Mobile menu
function openMobileMenu(){
  menuMobile.style.left = '0'
  overlay.style.visibility = 'visible'
};

function closeMobileMenu(){
  menuMobile.style.left = '-250px'
  overlay.style.visibility = 'hidden'
};


// Cart

cart.onclick = function() {
  cart.style.bottom = '100px'
};



cartHeader.addEventListener('click', ()=>{
  if(cart.style.bottom === '-283px') {
    cart.style.bottom = '100px'
  }
  else {cart.style.bottom = '-283px'}
});



//cartHeader.addEventListener('click', ()=>{
 // if(cart.style.display === 'block') {
 //   cart.style.display = 'none'
  //}
  //else {cart.style.display = 'block'}
//})



