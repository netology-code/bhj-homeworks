const cart__products = document.querySelector('.cart__products');
const products = document.getElementsByClassName('product');

const cart__product_count = document.getElementsByClassName('cart__product-count');

let products_arr = Array.from(products);

for(let product of products_arr) {

    const cart = cart__products.querySelectorAll('.cart__product');
    const cart_elem_arr = Array.from(cart);
    const cart_elem = cart_elem_arr[cart_elem_arr.findIndex(elem => elem.getAttribute('data-id') === product.getAttribute('data-id'))]
    
    product.querySelector('.product__quantity-control_inc').addEventListener('click', function(e) {
        if (cart_elem) {
            Number(cart_elem.querySelector('.cart__product-count').textContent)++;
        }
        else if (!cart_elem) {
            cart__products.insertAdjacentHTML('afterbegin', cart__products.firstElementChild.outerHTML);
            cart_elem = cart__products.firstElementChild;
            cart_elem.setAttribute('data-id') === product.getAttribute('data-id');
            cart_elem.querySelector('.cart__product-image').setAttribute('src') === product.querySelector('.product__image').getAttribute('src');
            Number(cart_elem.querySelector('.cart__product-count').textContent)++;
        }
        e.preventDefault();
    });

    product.querySelector('.product__quantity-control_dec').addEventListener('click', function(e) {
        if (cart_elem) {
            if (Number(cart_elem.querySelector('.cart__product-count').textContent) == 1) {
                cart_elem.remove();
            }
            else if (Number(cart_elem.querySelector('.cart__product-count').textContent) > 1) {
                Number(cart_elem.querySelector('.cart__product-count').textContent)--;
            }
        }
        e.preventDefault();
    });

    product.querySelector('.product__add').addEventListener('click', function(e) {
        if (cart_elem) {
            Number(cart_elem.querySelector('.cart__product-count').textContent)++;
        }
        else if (!cart_elem) {
            cart__products.insertAdjacentHTML('afterbegin', cart__products.firstElementChild.outerHTML);
            cart_elem = cart__products.firstElementChild;
            cart_elem.setAttribute('data-id') === product.getAttribute('data-id');
            cart_elem.querySelector('.cart__product-image').setAttribute('src') === product.querySelector('.product__image').getAttribute('src');
            Number(cart_elem.querySelector('.cart__product-count').textContent)++;
        }
        e.preventDefault();
    });
}

