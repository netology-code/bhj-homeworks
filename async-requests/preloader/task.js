document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const items = document.getElementById('items');

    function showLoader() {
        loader.classList.add('loader_active');
    }

    function hideLoader() {
        loader.classList.remove('loader_active');
    }

    function renderCurrency(currency) {
        const item = document.createElement('div');
        item.classList.add('item');

        const code = document.createElement('div');
        code.classList.add('item__code');
        code.textContent = currency.CharCode;
        item.appendChild(code);

        const value = document.createElement('div');
        value.classList.add('item__value');
        value.textContent = currency.Value;
        item.appendChild(value);

        const currencyText = document.createElement('div');
        currencyText.classList.add('item__currency');
        currencyText.textContent = 'руб.';
        item.appendChild(currencyText);

        items.appendChild(item);
    }

    function loadCurrency() {
        showLoader();
        fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
            .then(response => response.json())
            .then(data => {
                hideLoader();
                const currencies = data.response.Valute;
                for (const currency in currencies) {
                    renderCurrency(currencies[currency]);
                }
            })
            .catch(error => {
                console.error('Error fetching currency:', error);
                hideLoader();
            });
    }

    loadCurrency();
});
