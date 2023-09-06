let products = document.querySelector(".products");
let cart = document.querySelector(".cart");
let cartProducts = [];
let toLocalStorage,
  fromLocalStorage = null;
let arrayForGetCoords;

window.addEventListener("load", function () {
  fromLocalStorage = localStorage.getItem("cart");

  if (fromLocalStorage !== null) {
    fromLocalStorage = JSON.parse(localStorage.getItem("cart"));
    cartProducts = fromLocalStorage;
    renderProducts(cartProducts);
  }
});

cart.addEventListener("click", function (event) {
  let target = event.target;

  if (target.classList.contains("cart__product-remove")) {
    let findSame = cartProducts.findIndex(
      (el) => el.id === target.closest(".cart__product").dataset.id
    );

    target.closest(".cart__product").remove();

    if (findSame !== -1) {
      cartProducts.splice(findSame, 1);
      toLocalStorage = JSON.stringify(cartProducts);
      localStorage.setItem("cart", toLocalStorage);

      if (cartProducts.length === 0) {
        cart.style.display = "none";
      }
    }

    return false;
  }
});

products.addEventListener("click", function (event) {
  let target = event.target;
  let changeQuantity;

  if (target.classList.contains("product__quantity-control_dec")) {
    changeQuantity = target
      .closest(".product__quantity-controls")
      .querySelector(".product__quantity-value");

    if (Number(changeQuantity.innerText) === 1) {
      return false;
    } else {
      changeQuantity.innerText--;
    }

    return false;
  } else if (target.classList.contains("product__quantity-control_inc")) {
    changeQuantity = target
      .closest(".product__quantity-controls")
      .querySelector(".product__quantity-value");
    changeQuantity.innerText++;

    return false;
  }

  if (target.classList.contains("product__add")) {
    let productId = target.closest(".product").dataset.id;
    let productImg = target
      .closest(".product")
      .querySelector(".product__image");
    let productCount = parseInt(
      target
        .closest(".product__quantity")
        .querySelector(".product__quantity-value").innerText
    );
    let obj;

    let coordsImgProduct = productImg.getBoundingClientRect();
    let coordsImgCartProduct = null;

    if (cartProducts.length > 0) {
      let findSame = cartProducts.findIndex((el) => el.id === productId);

      if (findSame !== -1) {
        cartProducts[findSame].count += productCount;
        renderProducts(cartProducts);
        toLocalStorage = JSON.stringify(cartProducts);
        localStorage.setItem("cart", toLocalStorage);

        getCoords(findSame, coordsImgProduct);

        return false;
      }
    }

    obj = {
      id: productId,
      img: productImg.getAttribute("src"),
      count: productCount,
    };

    cartProducts.push(obj);
    renderProducts(cartProducts);
    let findSame = arrayForGetCoords.findIndex(
      (el) => el.dataset.id === productId
    );
    if (findSame !== -1) {
      coordsImgCartProduct = arrayForGetCoords[findSame]
        .querySelector(".cart__product-image")
        .getBoundingClientRect();
      getCoords(findSame, coordsImgProduct);
    }
    toLocalStorage = JSON.stringify(cartProducts);
    localStorage.setItem("cart", toLocalStorage);
  }

  return false;
});

function renderProducts(array) {
  let cartRender = array.map(
    (el) => `
        <div class="cart__product" data-id="${el.id}">    
            <img class="cart__product-image" src="${el.img}">
            <div class="cart__product-count">${el.count}</div>
            <a class="cart__product-remove">X</a>
        </div>    
    `
  );

  cart.querySelector(".cart__products").innerHTML = cartRender.join("");

  arrayForGetCoords = Array.from(
    cart.querySelector(".cart__products").querySelectorAll(".cart__product")
  );

  if (cartProducts.length > 0) {
    cart.style.display = "block";
  }
}

function getCoords(index, coordsImgProduct) {
  coordsImgCartProduct = arrayForGetCoords[index]
    .querySelector(".cart__product-image")
    .getBoundingClientRect();
  let imgClone = arrayForGetCoords[index]
    .querySelector(".cart__product-image")
    .cloneNode(true);

  document.body.appendChild(imgClone);
  imgClone.style.position = "absolute";
  imgClone.style.top = coordsImgProduct.top + "px";
  imgClone.style.left = coordsImgProduct.left + "px";

  let differenceY = coordsImgProduct.top - coordsImgCartProduct.top;
  let differenceX = coordsImgProduct.left - coordsImgCartProduct.left;

  let steps = 10;
  let timer = setInterval(() => {
    steps--;
    draw();

    if (steps <= 0) {
      clearInterval(timer);
      imgClone.remove();

      return false;
    }
  }, 20);

  function draw() {
    imgClone.style.top = coordsImgProduct.top - differenceY / steps + "px";
    imgClone.style.left = coordsImgProduct.left - differenceX / steps + "px";
  }
}
