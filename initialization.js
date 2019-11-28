let display = document.getElementById('displayApp');
let screen = new Screen();

let stt = 0;

// let bill1 = new Bill();
// let bill2 = new Bill();
// let bill3 = new Bill();
// let bill4 = new Bill();
// let bill5 = new Bill();
// let bill6 = new Bill();
// let bill7 = new Bill();
// let bill8 = new Bill();
// let bill9 = new Bill();
//
// let ListBill = [bill1, bill2, bill3, bill4, bill5, bill6, bill7, bill8, bill9];
let ListBill = [];

for (let i = 0; i < 9; i++) {
    let bill = new Bill();
    ListBill.push(bill);
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

let ListTable = [];
for (let i = 0; i < 9; i++) {
    let table = new Table('t00'+i);
    ListTable.push(table);
    ListTable[i].resetTable();
    console.log(ListTable[0].TypeOfDrinkAndAmout);
}
screen.init();