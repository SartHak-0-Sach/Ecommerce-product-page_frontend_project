document.addEventListener('DOMContentLoaded', function () {
    var hamburgerMenu = document.getElementById('hamburger-menu');
    var mobileMenu = document.getElementById('mobile-menu');
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    hamburgerMenu.addEventListener('click', function () {
        mobileMenu.style.left = '0%';
        overlay.style.display = 'block';
    });

    overlay.addEventListener('click', function () {
        mobileMenu.style.left = '-100%';
        overlay.style.display = 'none';
    });

    document.getElementById('close').addEventListener('click', function () {
        mobileMenu.style.left = '-100%';
        overlay.style.display = 'none';
    });

    var menuLinks = document.querySelectorAll('#mobile-menu a');
    menuLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            mobileMenu.style.left = '-100%';
            overlay.style.display = 'none';
        });
    });
});



var images = document.getElementById('images');
var zoom = document.getElementById('modal-zoom');
var xZoom = document.getElementById('icon-close');

images.addEventListener('click', function () {
    zoom.classList.remove('zoom');
});

xZoom.addEventListener('click', function () {
    zoom.classList.add('zoom');
});



$(document).ready(function () {
    $(".image-container").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $(".prev-icon"),
        nextArrow: $(".next-icon"),
    });
});

var counterBtn = document.getElementById("counterBtn");
var counterValue = document.getElementById("counterValue");
var addToCartBtn = document.getElementById("addToCartBtn");
var cartAmount = document.getElementById("cartAmount");
var cartFilled = document.getElementById("cart-filled");
var emptyCart = document.getElementById('empty-cart');
var totalProducts = document.getElementById('cart-total-products');
var cartTotal = document.getElementById('cart-total');

var contador = 0; // Inicializamos el contador en 0

var totalP = counterValue.textContent = contador;
totalProducts.textContent = totalP;

counterBtn.addEventListener("click", function (event) {
    if (event.target.classList.contains("plus-icon")) {
        contador++;
    } else if (event.target.classList.contains("minus-icon")) {
        contador = Math.max(0, contador - 1);
    }
    counterValue.textContent = contador;
});

addToCartBtn.addEventListener("click", function () {
    // Actualizar el contenido y el estilo del elemento cart-amount
    if (contador === 0) {
        // Si el contador es 0, establece el display en 'none' para ambos elementos
        cartAmount.style.display = 'none';
        cartFilled.style.display = 'none';
        emptyCart.style.display = 'flex';
    } else {
        // Si el contador no es 0, actualiza el contenido y el estilo de cartAmount
        cartAmount.textContent = contador;
        emptyCart.style.display = 'none';
        cartFilled.style.display = 'flex';
    }

    // Actualizar totalProducts con el valor actualizado del contador
    totalProducts.textContent = contador;

    // Multiplicar el contador por 125 y asignar el resultado a cartTotal
    cartTotal.textContent = '$' + contador * 125;

    // Reiniciar el contador del botón
    contador = 0;
    counterValue.textContent = contador;
});

var deleteBtn = document.getElementById('delete-icon');

deleteBtn.addEventListener('click', function () {
    cartAmount.style.display = 'none';
    cartFilled.style.display = 'none';
    emptyCart.style.display = 'flex';
})

var cartModal = document.getElementById('cart-modal');
var shopCart = document.getElementById('shop-cart');

// Toggle para mostrar/ocultar el modal al hacer clic en el carrito
shopCart.addEventListener('click', function () {
    cartModal.classList.toggle('active');

    // Aplicar o quitar la clase al shop-cart cuando el modal está activo o inactivo
    if (cartModal.classList.contains('active')) {
        shopCart.classList.add('active');
    } else {
        shopCart.classList.remove('active');
    }
});

// Ocultar el modal al hacer clic fuera de él
window.addEventListener('click', function (event) {
    if (!cartModal.contains(event.target) && event.target !== shopCart) {
        cartModal.classList.remove('active');
        shopCart.classList.remove('active');
    }
});