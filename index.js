
const cartHeader =document.getElementById('cart-header');
const cart =document.getElementById('cart');

cartHeader.addEventListener('click', ()=>{
  if(cart.style.display === 'block') {
    cart.style.display = 'none'
  }
  else {cart.style.display = 'block'}
})