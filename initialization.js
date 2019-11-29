let display = document.getElementById('displayApp');
let screen = new Screen(2, 3, 4, 3);
let numberOfTables = 9;

//Khởi tạo các loại đồ uống
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

//Khởi tạo mảng các đối tượng table, khởi tạo mảng lưu trữ danh sách oder
let ListTable = [];
for (let i = 0; i < numberOfTables; i++) {
    let table = new Table('t00'+i);
    ListTable.push(table);
    ListTable[i].resetTable();
}

//Khởi tạo danh sách đối tượng hóa đơn
let stt = 0;
let ListBill = [];
for (let i = 0; i < numberOfTables; i++) {
    let bill = new Bill();
    ListBill.push(bill);
}
screen.init();