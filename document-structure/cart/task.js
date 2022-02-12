const product__quantity_control = document.getElementsByClassName('product__quantity-control');
const product__quantity_value = document.getElementsByClassName('product__quantity-value');
const product__quantity_control_dec = document.getElementsByClassName('product__quantity-control_dec');
const product__quantity_control_inc = document.getElementsByClassName('product__quantity-control_inc');
const cart__product = document.getElementsByClassName('cart__product');
const product = document.getElementsByClassName('product');
const cart__product_count = document.getElementsByClassName('cart__product-count');

product__quantity_control_inc.addEventListener('click', function() {
    if(parseInt(cart__product_count.textContent) > 0) {
        product__quantity_value.textContent++;
    }
    else if(parseInt(cart__product_count.textContent) === 0) {
        product__quantity_value.textContent++;
        parseInt(cart__product_count.textContent) === product__quantity_value;
    }
})

product__quantity_control_dec.addEventListener('click', function() {
    if(parseInt(cart__product_count.textContent) > 1) {
        product__quantity_value.textContent--;
    }
})