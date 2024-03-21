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
    grid.innerHTML += ` <div class="col">
                            <div class="card h-100" style="width: 18rem;">
                                <img class="object-fit-cover" height="230" src="${item.thumbnail}"
                                    class="card-img-top" alt="Product image">
                                <div class="card-body">
                                    <h5 class="card-title">${item.title}</h5>
                                    <p class="card-text">Rating: ${item.rating} - ${item.price}$</p>
                                </div>
                                <div class="card-footer text-center">
                                    <a href="#" class="btn btn-success px-5">Buy</a>
                                </div>
                            </div>
                        </div>`;
}

loadBtn.onclick = () => loadProducts();

loadProducts();