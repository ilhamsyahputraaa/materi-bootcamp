class Fruit {


    constructor(name, color, taste) {
        this.name = name;
        this.color = color;
        this.taste = taste;
    }

    description = () => {
        return `Ini adalah buah ${this.name} Warnanya ${this.color} , rasanya  ${this.taste}`;
    }

}


class Chili extends Fruit {
    constructor(name, color, taste, type) {
        super(name, color, taste);
        this.color = color;
        this.type = type;
    }

    description = () => {
        return `Ini adalah buah ${this.type} ${this.name},Warnanya ${this.color} , rasanya  ${this.taste}`
    }
}

let rawit = new Chili ('Rawit', 'Merah', 'Pedas', 'Cabai');
console.log(rawit);
console.log(rawit.description());
