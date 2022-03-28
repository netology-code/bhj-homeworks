const products = document.querySelectorAll('.product');
const cart__products = document.querySelector('.cart__products');
const new_cart__product = document.createElement('div');
        new_cart__product.innerHTML = 
        `<div class="cart__product" data-id="1">
             <img class="cart__product-image" src="image.png">
             <div class="cart__product-count">20</div>
         </div>`;

for(let product of Array.from(products)) {
    let product__quantity_value = +(product.querySelector('.product__quantity-value').textContent);
    product.querySelector('.product__quantity-control_dec').addEventListener('click', function(e) {
        
        if(product__quantity_value !== 1) {
            product__quantity_value--;
        }
        e.preventDefault();
    });
    product.querySelector('.product__quantity-control_inc').addEventListener('click', function(e) {
            product__quantity_value++;
            e.preventDefault();
    });
    product.querySelector('.product__quantity-value').textContent = product__quantity_value;

    const product__add = product.querySelector('.product__add');
    product__add.addEventListener('click', function(e) {
        const cart__product = new_cart__product.cloneNode(true);
        cart__product.getAttribute('data-id') === product.getAttribute('data-id');
        cart__product.querySelector('.cart__product-image').getAttribute('src') === product.querySelector('.product__image').getAttribute('src');
        cart__product.querySelector('.cart__product-count').textContent = product__quantity_value;
       
        const cart__products_arr = Array.from(cart__products.querySelectorAll('.cart__product'));
        if(!cart__products_arr.includes(elem => elem.getAttribute('data-id') === product.getAttribute('data-id'))) {
            cart__products.appendChild(cart__product);
        }
        else {
            const cart__product_added = cart__products_arr[cart__products_arr.findlndex(elem => elem.getAttribute('data-id') === product.getAttribute('data-id'))];
            let cart__product_count = +(cart__product_added.querySelector('.cart__product-count').textContent);
            cart__product_count++;
            cart__product_added.querySelector('.cart__product-count').textContent = cart__product_count;
        }

        
        e.preventDefault();
    })

}



