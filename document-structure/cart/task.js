const product = Array.from(document.querySelectorAll('.product'));
const cartProducts = document.querySelector('.cart__products');
const productAdd = Array.from(document.querySelectorAll('.product__add'));
const productImg = Array.from(document.querySelectorAll('.product__image'));
let index;

productAdd.forEach(item => item.addEventListener('click', (e) => {
    index = e.currentTarget.closest('.product').dataset.id;
    const quantityValue = e.currentTarget.closest('.product').querySelector('.product__quantity-value');
    const cartProduct = Array.from(cartProducts.querySelectorAll('.cart__product'));
    const cartProductCount = Array.from(cartProducts.querySelectorAll('.cart__product-count'));

    if(!cartProduct[index - 1]) {
        cartProducts.insertAdjacentHTML('beforeend', `<div class="cart__product" data-id="${index}">
    <img class="cart__product-image" src="${productImg[index - 1].currentSrc}">
    <div class="cart__product-count">${quantityValue.textContent}</div>`);
    } else {
        cartProductCount[index - 1].textContent = Number(cartProductCount[index - 1].textContent) + Number(quantityValue.textContent);
    }
}));

product.forEach(item => {
    const productQuantityControl = Array.from(item.querySelectorAll('.product__quantity-control'));
    const productQuantityValue = item.querySelector('.product__quantity-value');

    productQuantityControl.forEach(quantity => {
        const quantityControl = () => {
            if(quantity.classList.contains('product__quantity-control_inc')) {
                productQuantityValue.textContent = +productQuantityValue.textContent + 1;
            } else if(quantity.classList.contains('product__quantity-control_dec')) {
                productQuantityValue.textContent = +productQuantityValue.textContent - 1;
            }
            if(productQuantityValue.textContent <= 1) {
                productQuantityValue.textContent = 1;
            }
        }
        quantity.addEventListener('click', quantityControl);
    });
});