const product = Array.from(document.querySelectorAll('.product'));
const productAdd = Array.from(document.querySelectorAll('.product__add'));
const cart = document.querySelector('.cart');
const prodPlus = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const prodMinus = Array.from(document.querySelectorAll('.product__quantity-control_dec'));

product.forEach(el => el.addEventListener('click', function (e) {
    const target = e.target;
    const id = this.dataset.id;
    const img = this.querySelector('.product__image');
    const src = img.getAttribute('src');
    let quantity = this.querySelector('.product__quantity-value');

    prodPlus.forEach(prod => {
        if (target === prod) {
            ++quantity.innerText;
        }
    })
    prodMinus.forEach(prod => {
        if (target === prod) {
            --quantity.innerText;
            if (quantity.innerText <= 1) {
                quantity.innerText = 1;
            }
        }
    })

    const insertProd = id => {
        cart.insertAdjacentHTML("beforeEnd",
            `<div class="cart__products">
                <div class="cart__product" data-id=${id}>
                    <img class="cart__product-image" src=${src}>
                    <div class="cart__product-count">${quantity.innerText}</div>
                </div>
            </div>`);
    }

    productAdd.forEach(i => {
        const cartProd = Array.from(cart.querySelectorAll('.cart__product'));
        const cartProdId = cartProd.map(item => item.dataset.id);

        if (target === i && ((cartProd.length === 0) || (cartProd.length !== 0 && cartProdId.indexOf(id) === -1))) {
            insertProd(id);
        } if (target === i && cartProdId.indexOf(id) !== -1) {
            cartProd.forEach(prod => {
                const prodCount = prod.querySelector('.cart__product-count');
                if (prodCount.closest('.cart__product').dataset.id === id) {
                    let prodCountNum = Number(prodCount.innerText);
                    let prodQuantity = Number(quantity.innerText);
                    prodCount.innerText = prodCountNum + prodQuantity;
                }
            })
        }
    })
}))

