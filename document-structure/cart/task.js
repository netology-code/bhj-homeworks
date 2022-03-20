const cart__products = document.querySelector('.cart__products');
const products = document.getElementsByClassName('product');

const cart__product_count = document.getElementsByClassName('cart__product-count');

let products_arr = Array.from(products);

for(let product of products_arr) {

    let cart_elem = cart__products[cart__products.findIndex(elem => elem.getAttribute('data-id') === product.getAttribute('data-id'))];
    
    product.querySelector('.product__quantity-controls').lastElementChild.addEventListener('click', function(e) {
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

    product.querySelector('.product__quantity-controls').firstElementChild.addEventListener('click', function(e) {
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

