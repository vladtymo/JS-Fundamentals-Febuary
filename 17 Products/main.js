const api = "https://dummyjson.com/products";
const grid = document.querySelector('#products-grid');

const pagination = {
    limit: 33,
    skip: 0,
    total: null,

    next() {
        this.skip += this.limit;
    }
}

async function loadProducts() {
    const res = await fetch(`${api}?limit=${pagination.limit}&skip=${pagination.skip}`);
    const data = await res.json();

    pagination.next();

    // TODO: make load button disabled when all products were loaded

    console.log(data);
    data.products.forEach(i => {
        addProduct(i);
    });
}

function addProduct(item) {

    // Використання шаблону та додавання на сторінку
    var source = document.getElementById('cardTemplate').innerHTML;
    var template = Handlebars.compile(source);
    var cardHtml = template(item);

    grid.innerHTML += cardHtml;
}

loadBtn.onclick = () => loadProducts();

loadProducts();