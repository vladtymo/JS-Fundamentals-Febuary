// -=-=-=-=-=-=- Classes -=-=-=-=-=-=-

// OOP Principles: 
//  * Encapsulation
//  * Inheritance
//  * Polymorphism
//  * [Abstraction]

// class Name { proeprties (fields), constructor, methods, getters/setters }

class Product {
    // private fields - access only from this class (ES2022)
    #quantity;
    #price;

    // static fields create only once for all instances
    static count = 0;

    // initilize all required props
    constructor(name, price, quantity, bonus = 0) {
        // create properties
        this.name = name;
        this.#price = price;
        this.rating = null;
        this.bonus = bonus;
        this.#quantity = quantity;
        this.inStock = quantity > 0 ? true : false;
        // access static fields
        Product.count++;
    }

    // metbods
    show() {
        console.log(`Product: ${this.name}, ${this.#price}$`);
    }
    showStatus() {
        console.log(`${this.name} is ${this.inStock ? 'in stock' : 'out of stock'}!`);
    }
    applyDiscount(value) {
        // TODO: add validation
        this.#price -= this.#price / 100 * value;
    }
    getTotalPrice() {
        return this.#price * this.#quantity;
    }
    setPrice(value) {
        if (value >= 0) // data validation
            this.#price = value;
    }
    // static method
    static getCount() {
        // does not have [this]
        return Product.count;
    }

    // ---- get / set
    set price(value) {
        if (value >= 0) // data validation
            this.#price = value;
    }
    get total() {
        return this.#price * this.#quantity;
    }
    set quantity(value) {
        if (value >= 0)
            this._quantity = value;
    }
}

let pr1 = new Product("iPhone X", 434, 4); // create object instance
pr1.showStatus();

console.log("Bonus:", pr1.bonus);
pr1.setPrice(-10); // ignore

// --------- encapsulation principle
//pr1.#price = -100;    // unsafe
pr1.setPrice(-100);     // safe
pr1.price = -100;       // safe

pr1.show();
pr1.applyDiscount(5);
pr1.show();

console.log("Product count:", Product.getCount()); // 1

// ----- create class instance
let my = new Product("Asus MG50", 11000, 5); // invoke ctor

// ----- setter & getter as methods

//my.#price = -12500;       // bad practice (fields)
my.setPrice(-12500);        // good practice (method)
my.price = -100;            // good practice (setter)

my.setPrice(+prompt("Enter price:"));

console.log("Total price:", my.getTotalPrice());

// ----- setter & getter as properties
//my.#quantity = -10; // private field
my.quantity = 6;
my.rating = 5;

console.log("Total price:", my.total);

let his = new Product("AFOX PCI-Ex", 1249, 2);
his.show();
his.showStatus();

console.log("Product count:", Product.count); // 3

// -=-=-=-=-=-=- Interitance -=-=-=-=-=-=-
class Monitor extends Product {

    // [super] - reference to the base class (Product)
    constructor(name, price, resolution, diagonal, type) {
        super(name, price, 1); // base ctor

        // crete new fields
        this.resolution = resolution;
        this.diagonal = diagonal;
        this.type = type;
    }

    // ! all the Product methods and fields already contains
    // override base method
    show() {
        super.show(); // base method
        alert("I am monitor!")
        console.log(`Screen: ${this.resolution}, ${this.type}`);
    }

    // add new methods
    // TODO: calculate real PPI
    get ppi() {
        return this.diagonal * 2.5;
    }
}

const myMonitor = new Monitor("LG", 390, "1920x1080", 21.5, "IPS");

myMonitor.quantity = 10;
myMonitor.show();
console.log(`PPI: ${myMonitor.ppi} pixels per inch...`);

function showProduct(item) {
    alert(item.name);
    item.show(); // polymorphism
}

// ------------ polymorphism
console.warn("Polymorphism: Type Product");
showProduct(my);        // polymorphism

console.warn("Polymorphism: Type Monitor");
showProduct(myMonitor); // polymorphism
