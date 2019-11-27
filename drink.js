let Drinking = function (id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.screenDrink = '';
}

let MilkCoffee = new Drinking('d001', 'MilkCoffee', 20);
let BlackCoffee = new Drinking('d002', 'BlackCoffee', 15);
let Cacao = new Drinking('d003', 'Cacao', 25);
let LemonTea = new Drinking('d004', 'LemonTea', 15);
let MilkTeaMatcha = new Drinking('d005', 'MilkTeaMatcha', 30);
let MilkTeaPearlBlackSugar = new Drinking('d006', 'MilkTeaPearlBlackSugar', 40);
let MilkTeaTaro = new Drinking('d007', 'MilkTeaTaro', 25);
let GoldLotusTea = new Drinking('d008', 'GoldLotusTea', 45);

let ListDrinking = [MilkCoffee, BlackCoffee, Cacao, LemonTea,
    MilkTeaMatcha, MilkTeaPearlBlackSugar, MilkTeaTaro, GoldLotusTea];