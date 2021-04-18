debugger;
const products = [{
        id: 1,
        title: 'Notebook',
        // price: 20000
    },
    {
        id: 2,
        title: 'Mouse',
        price: 1500
    },
    {
        id: 3,
        title: 'Keyboard',
        price: 5000
    },
    {
        id: 4,
        title: 'Gamepad',
        price: 4500
    },
    {
        id: 5,
        title: 'Mouse',
        price: 1500
    }, {
        id: 6,
        title: 'Keyboard',
        price: 5000
    }, {
        id: 7,
        title: 'Gamepad',
        price: 4500
    },
];

const renderProduct = (title = 'Название отсутствует', price = 'Цена не указана') => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
};

for (let i = 0; i < products.length; i++) {
    let price = products[i].price;
    let title = products[i].title;
    let productCard = renderProduct(title, price);
    // document.getElementsByClassName('products').innerHTML = productCard;
}

const renderProducts = (list = []) => {
    const productList = list.map((item) => {
        return renderProduct(item.title, item.price);
    });

    document.querySelector('.products').innerHTML = productList.join(' ');
};

renderProducts(products);