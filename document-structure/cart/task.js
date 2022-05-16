let quantity = document.getElementsByClassName('product__quantity-value');
let add = document.getElementsByClassName('product__add');
let cartProducts = document.querySelector('.cart__products');
let product = document.getElementsByClassName('product');
let plus = document.getElementsByClassName('product__quantity-control_inc');
let minus = document.getElementsByClassName('product__quantity-control_dec');

for (let index = 0; index < quantity.length; index++) {
    plus[index].addEventListener('click', () => {
        quantity[index].textContent++;
    })

    minus[index].addEventListener('click', () => {
        quantity[index].textContent--;

        if (quantity[index].textContent < '1') {
            quantity[index].textContent = '1'
        }
    });

    add[index].addEventListener('click', () => {
        for (let i = 0; i < cartProducts.children.length; i++) {
            if (cartProducts.children[i].dataset.id === product[index].dataset.id) {
                return cartProducts.children[i].querySelector('.cart__product-count').textContent = Number(cartProducts.children[i].querySelector('.cart__product-count').textContent) + Number(quantity[i].textContent);
            }
        }

        cartProducts.insertAdjacentHTML('beforeend', `
            <div class="cart__product" data-id="${product[index].dataset.id}">
                <img class="cart__product-image" src="${product[index].querySelector('img').getAttribute('src')}">
                <div class="cart__product-count">${quantity[index].textContent}</div>
            </div>
            `);
    });
}