// ----------- get elements from html
const tBody = document.querySelector('#product-table tbody');
const clearBtn = document.getElementById('clear-btn');

const form = document.forms.productForm;

const modelIn = form.elements.model;
const priceIn = form.elements.price;
const statusIn = form.elements.status;

form.onsubmit = (event) => {
    event.preventDefault();

    // const car = {
    //     id: 1000,
    //     model: modelIn.value,
    //     price: +priceIn.value,
    //     status: statusIn.checked
    // }
    const car = new Car(modelIn.value, +priceIn.value, statusIn.checked);
    console.log(car);

    addItemToTable(car);
}
clearBtn.onclick = () => {
    // clear table
    tBody.innerHTML = "";
}

function addItemToTable(item) {
    tBody.innerHTML += `<tr class="${item.status ? "available" : ""}">
                            <td>${item.id}</td>
                            <td>${item.model}</td>
                            <td>${item.price}$</td>
                            <td>${item.statusName}</td>
                        </tr>`;
}

class Car {
    static count = 1000;

    constructor(model, price, status = true) {
        this.model = model;
        this.price = price;
        this.status = status;
        this.id = Car.count++;
    }

    get statusName() {
        return this.status ? 'In Stock' : 'Out of Stock';
    }
}