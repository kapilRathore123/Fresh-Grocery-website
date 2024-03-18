

let searchForm = document.querySelector('.search-form');

document.querySelector('#headericontwo').onclick = () =>
{
    searchForm.classList.toggle('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#headericonthree').onclick = () =>
{
   shoppingCart.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#headericonforth').onclick = () =>
{
   loginForm.classList.toggle('active');
}


var typed = new Typed(".auto-type",{
   strings : ["100% Organic.."],
   typeSpeed : 170,
   backSpeed : 170,
   looped : true
})


 var loader = document.getElementById("preloader");

 window.addEventListener("load", function (){
    loader.style.display = "none";
 })