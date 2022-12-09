const products = document.querySelectorAll('.product');
const cart__products = document.querySelector('.cart__products');

for (let product of Array.from(products)) {

    const product__add = product.querySelector('.product__add');
    
    product__add.addEventListener('click', function(e) {

        const cart__products_arr = Array.from(cart__products.querySelectorAll('.cart__product'));
        const cart__product_added = cart__products_arr.find(elem=>elem.getAttribute('data-id') === product.getAttribute('data-id'));
        
        if (cart__product_added) {
            cart__product_added.querySelector('.cart__product-count').textContent = product__quantity_value;     
        } else {
            const cart__product = document.createElement('div');
            cart__product.innerHTML = 
                `<div class="cart__product" data-id=` + product.getAttribute('data-id') + `>
                   <img class="cart__product-image" src=` + product.querySelector('.product__image').getAttribute('src') + `>
                   <div class="cart__product-count">` + product__quantity_value + `</div>
                 </div>`;            
            cart__products.appendChild(cart__product);
            
        }
        e.preventDefault();
    });

    let product__quantity_value = +(product.querySelector('.product__quantity-value').textContent);
    
    product.querySelector('.product__quantity-control_dec').addEventListener('click', function(e) {

        const cart__products_arr = Array.from(cart__products.querySelectorAll('.cart__product'));
        const cart__product_added = cart__products_arr.find(elem=>elem.getAttribute('data-id') === product.getAttribute('data-id'));

        if (product__quantity_value !== 1) {
            product__quantity_value--;
            product.querySelector('.product__quantity-value').textContent = product__quantity_value;
            
            if(cart__product_added) {
            cart__product_added.querySelector('.cart__product-count').textContent = product__quantity_value;
            }
        }
        e.preventDefault();
    });
    
    product.querySelector('.product__quantity-control_inc').addEventListener('click', function(e) {
        
        const cart__products_arr = Array.from(cart__products.querySelectorAll('.cart__product'));
        const cart__product_added = cart__products_arr.find(elem=>elem.getAttribute('data-id') === product.getAttribute('data-id'));
        
        product__quantity_value++;
        product.querySelector('.product__quantity-value').textContent = product__quantity_value; 
        
        if(cart__product_added) {
            cart__product_added.querySelector('.cart__product-count').textContent = product__quantity_value;  
        }
        e.preventDefault();
    });
}
