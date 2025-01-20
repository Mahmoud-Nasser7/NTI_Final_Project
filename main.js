function changeImage(element) {
    var mainDisplay = document.getElementById('mainDisplay');
    mainDisplay.src = element.src;
}


let goTopBtn = document.getElementById("goTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        goTopBtn.style.display = "block";
    } else {
        goTopBtn.style.display = "none";
    }
};

function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
}


function loadCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let cartItems = document.getElementById('cartItems');

  cartItems.innerHTML = ''; 

  cart.forEach((item, index) => {
      let li = document.createElement('li');
      li.textContent = item;

      let deleteIcon = document.createElement('i');
      deleteIcon.className = 'fas fa-trash delete-icon'; 
      deleteIcon.onclick = function() {
          removeFromCart(index);
      };

      li.appendChild(deleteIcon);
      cartItems.appendChild(li);
  });
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1); 
  localStorage.setItem('cart', JSON.stringify(cart)); 
  loadCart(); 
}

function removeAll() {
  localStorage.removeItem('cart'); 
  loadCart(); 
}

loadCart();



