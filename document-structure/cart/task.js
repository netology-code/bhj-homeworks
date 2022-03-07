







const product__quantity_controls = document.getElementsByClassName('product__quantity-controls');
const cart = document.getElementById('1');
const cart__product_count = document.getElementsByClassName('cart__product-count');

let products_arr = Array.from(product__quantity_controls);

for(let product of products_arr) {
        product.children[2].addEventListener('click', function() {
            if(Number(cart.lastElementChild.textContent) > 0) {
                Number(product.children[1].textContent)++;
            }
            else if(Number(cart.lastElementChild.textContent) === 0) {
                Number(product.children[1].textContent)++;
                Number(cart.lastElementChild.textContent) === product.children[1];
            }
        });
        product.children[0].addEventListener('click', function() {
            if(Number(cart.lastElementChild.textContent) > 1) {
                Number(product.children[1].textContent)--;
            }
        });
    
}