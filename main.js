// Get the login modal
const modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Cart 

let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

//Open Cart
cartIcon.onclick = () => {
  cart.classList.add("active");
};

//Close Cart
closeCart.onclick = () => {
  cart.classList.remove("active");
};

//Working
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

//Functions
function ready(){

  //Item Add
  var addCart = document.getElementsByClassName("add-cart");
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClick);
  }


  function addProductToCart(title,price,productImage){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsName = cartItems.getElementsByClassName("producttitle");
    for (var i = 0; i < cartItemsName.length; i++){
      alert("You already have this item.");
    }
  }


  //Item Removal
  var removeCartButtons = document.getElementsByClassName("cart-remove");
  console.log(removeCartButtons);
  for (var i = 0; i < removeCartButtons.length; i++){
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  //Changes to quantity of items
  var quantityNumber = document.getElementsByClassName('cart-quantity');
  for (var i = 0; i < quantityNumber.length; i++){
    var number = quantityNumber[i];
    number.addEventListener("change", quantityChange);
  }
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}

//Quantity Changes
function quantityChange(event){
  var number = event.target;
  if (isNaN(number.value) || number.value <= 0){
    number.value = 1;
  }
  updatetotal();
}

//Add to Cart
function addCartClick(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName("producttitle")[0].innerText;
  console.log(title);
}

//Update Total Price 
function updatetotal(){
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + (price * quantity);
    total = Math.round(total*100)/100;

    document.getElementsByClassName("total-price")[0].innerText = "$" + total;

  }
}