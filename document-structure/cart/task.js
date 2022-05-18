let quantity = Array.from(document.querySelectorAll('.product__quantity-value'));
let add = Array.from(document.querySelectorAll('.product__add'));
let cartProducts = document.querySelector('.cart__products');
let product = Array.from(document.querySelectorAll('.product'));
let plus = document.querySelectorAll('.product__quantity-control_inc');
let minus = document.querySelectorAll('.product__quantity-control_dec');
let controlQuantity = Array.from(document.querySelectorAll('.product__quantity-control'));

controlQuantity.forEach(item => item.addEventListener('click', function() {
    let index = controlQuantity.findIndex(item => item.parent.dataset.id.includes('div product__quantity-control'));
    console.log(controlQuantity)
    if (controlQuantity.classList.contains('product__quantity-control_dec')) {
        quantity[index].textContent++;
    }
    if (controlQuantity.classList.contains('product__quantity-control_inc')) {
        quantity[index].textContent--;
        if (quantity[index].textContent < '1') {
            quantity[index].textContent = '1'
        }
    }
}));

for (let index = 0; index < quantity.length; index++) {
    // plus[index].addEventListener('click', () => {
    //     quantity[index].textContent++;
    // })
    //
    // minus[index].addEventListener('click', () => {
    //     quantity[index].textContent--;
    //
    //     if (quantity[index].textContent < '1') {
    //         quantity[index].textContent = '1'
    //     }
    // });

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

