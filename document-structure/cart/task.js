document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product');
    const cart = document.querySelector('.cart');
    const cartTitle = document.querySelector('.cart__title');
  
    productCards.forEach(product => {
      const addButton = product.querySelector('.product__quantity-control_inc');
      const removeButton = product.querySelector('.product__quantity-control_dec');
      const quantityValue = product.querySelector('.product__quantity-value');
      const addToCartButton = product.querySelector('.product__add');
  
      addButton.addEventListener('click', function() {
        let newValue = parseInt(quantityValue.textContent) + 1;
        quantityValue.textContent = newValue > 0 ? newValue : 1;
      });
  
      removeButton.addEventListener('click', function() {
        let newValue = parseInt(quantityValue.textContent) - 1;
        quantityValue.textContent = newValue > 0 ? newValue : 1;
      });
  
      addToCartButton.addEventListener('click', function() {
        const productId = product.getAttribute('data-id');
        const productImageSrc = product.querySelector('.product__image').getAttribute('src');
        const productQuantity = parseInt(quantityValue.textContent);
  
        const existingCartItem = cart.querySelector(`.cart__product[data-id="${productId}"]`);
        if (existingCartItem) {
          const existingQuantity = parseInt(existingCartItem.querySelector('.cart__product-count').textContent);
          existingCartItem.querySelector('.cart__product-count').textContent = existingQuantity + productQuantity;
        } else {
          const cartProduct = document.createElement('div');
          cartProduct.classList.add('cart__product');
          cartProduct.setAttribute('data-id', productId);
  
          const cartProductImage = document.createElement('img');
          cartProductImage.classList.add('cart__product-image');
          cartProductImage.setAttribute('src', productImageSrc);
          cartProduct.appendChild(cartProductImage);
  
          const cartProductCount = document.createElement('div');
          cartProductCount.classList.add('cart__product-count');
          cartProductCount.textContent = productQuantity;
          cartProduct.appendChild(cartProductCount);
          cart.appendChild(cartProduct);
        }
  
        cartTitle.style.display = 'block'; 
      });
    });
  });
  