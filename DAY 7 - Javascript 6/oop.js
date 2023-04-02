// parent class


class Vehicle {


    // encapsulation : because tax can't be accessed directly
    #tax;


    constructor(name, factory, year, price) {
        // public
        this.name = name;
        this.factory = factory;
        this.year = year;
        this.price = price;
    }


    setTax = (tax) => {
        //private
        this.#tax = tax;
    }


    getTax = () => {
        return this.#tax;
    }


    // abstraction : because it only outputs the
    // selling price without knowing where the calculation comes from
    sellingPrice = () => "Rp. ".concat(this.#tax + this.price);
    detail = () => {
        return `${this.name} Is Vehicle with factory ${this.factory}`;
    }
}



// inheritance
// child
class Car extends Vehicle {
    constructor(name, price, type) {
        super(name, '', '', price); // set value yang ada di class parent
        this.name = name;
        this.price = price;
        this.type = type;
    }


    // polymorphysm : because the method is named the same as
    // the parent but different in purpose or content
    detail = () => {
        return `${this.name} The Price Is ${this.price}`;
    }
}

// let honda = new Car('Honda', 10000, "car");
// console.log(honda);
// honda.setTax(500);

// console.log(honda.getTax());
// console.log(honda.detail());
// console.log(honda.sellingPrice());  // ini tadi pillar abstraction karna taxnya gak dimasukin


let Yaris = new Car ('Yaris', 20000, "City Car");










