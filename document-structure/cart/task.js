const product__quantity_controls = document.getElementsByClassName('product__quantity-controls');
const cart__product = document.getElementsByClassName('cart__product');
const cart__product_count = document.getElementsByClassName('cart__product-count');

let products_arr = Array.from(product__quantity_controls);
let cart_arr = Array.from(cart__product);

for(let product of products_arr) {
    for(let cart of cart_arr) {
        product.children[2].addEventListener('click', function() {
            if(parseInt(cart.lastElementChild.textContent) > 0) {
                product.children[1].textContent++;
            }
            else if(parseInt(cart.lastElementChild.textContent) === 0) {
                product.children[1].textContent++;
                parseInt(cart.lastElementChild.textContent) === product.children[1];
            }
        });
        product.children[0].addEventListener('click', function() {
            if(parseInt(cart.lastElementChild.textContent) > 1) {
                pproduct.children[1].textContent--;
            }
        });
    }
}