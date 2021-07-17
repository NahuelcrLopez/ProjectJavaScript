let carts = document.querySelectorAll(".add-cart");
// Creo los productos
let products = [
  {
    name: "Big Mark",
    tag: "Grande",
    price: 100,
    inCart: 0,
  },
  {
    name: "Especial",
    tag: "Mediana",
    price: 150,
    inCart: 0,
  },
  {
    name: "ChessBurguer",
    tag: "Grande",
    price: 340,
    inCart: 0,
  },
  {
    name: "Supreme",
    tag: "XXL",
    price: 1000,
    inCart: 0,
  },
];

// Contador de productos agregados
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}
// 
function onloadCartsNumbers() {

  let productNumbers = localStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}
function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");
  
  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }
  setItems(product);
}
// Funcion que incrementa el inCart y lo actualiza en el localStorage
function setItems(product){
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  
  if(cartItems !=null) {
        if (cartItems[product.tag] ==undefined) {
          cartItems = {
            ...cartItems,
            [product.tag]: product
          }
        }
        cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [products.tag]: product
    }
  }

  localStorage.setItem("productsInCart", JSON.stringify
  (cartItems));
}
// Funcion del costo total
function totalCost(product){
  let cartCost = localStorage.getItem('totalCost');
  if(cartCost !=null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);

  } else {
    localStorage.setItem("totalCost", product.price);
  }

}

onloadCartsNumbers();


// eventos y animaciones de jQuery
$(function () {
  console.log("El DOM esta preparado");
  $(".btn-hide").click(function () {
    $("table").hide();
  });

  $(".btn-show").click(function () {
    $("table").show();
  });

  $("#datosPersonales").submit(function () {
    let nombre = $("#nombre").val();
    let Gmail = $("#Gmail").val();
    $("#DtPersonales").text(`Nombre: ${nombre} - Correo: ${Gmail}`);
    alert(`Hola ${nombre}`);
  });
  $("p").css("background-color", "grey");
});

window.addEventListener("load", function () {
  console.log("Todos los elementos de la ventana están cargados");
});

