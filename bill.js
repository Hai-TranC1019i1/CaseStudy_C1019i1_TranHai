let Bill = function () {
    this.id = '';

    this.addBill = function (idTable1, idTable2) {
        this.Bill = this.Bill(idTable1) + this.Bill(idTable2);
    };
    this.payAndPrintBill = function (index) {
        let bill = '<p><strong><br>MilkTea & Coffee {CODE}</strong></p>';
        let price = 0;
        let date = new Date();
        let amount = 0;
        this.id = "b" + stt + date.valueOf();
        bill += "<p><strong>&nbsp;&nbsp;&nbsp;while (alive) {sleep(); code(); eat(); };</strong></p>"
        bill += "<p>Date: " + date.toDateString() + "</p>";
        bill += "<p>CodeBill: " + this.id + "</p>";
        bill += '<hr><br>';
        bill += "<table><tr><th>Name Of Drink</th><th>Amount</th><th>Prices</th></tr>";
        for (let i = 0; i < ListDrinking.length; i++)
            if (ListTable[index].TypeOfDrinkAndAmout[i] != 0) {
                amount = ListTable[index].TypeOfDrinkAndAmout[i];
                bill += "<tr><td>" + ListDrinking[i].name + "</td><td>" + amount + "</td>" +
                    "<td>" + amount * ListDrinking[i].price + ".000 VND</td></tr>"
                price += amount * ListDrinking[i].price;
        }
        bill += "<tr><td>Total:</td><td></td><td>" + price + ".000 VND</td></tr>" +
            "<tr><td><input type='button' value='Home' onclick='displayMainApp()'>" +
            "</td><td><input type='button' value='CleanTable' onclick='emptyTable(" + index + ")'></td></tr></table>";
        display.innerHTML = bill;
        stt++;
    };
}

let stt = 0;

let bill1 = new Bill();
let bill2 = new Bill();
let bill3 = new Bill();
let bill4 = new Bill();
let bill5 = new Bill();
let bill6 = new Bill();
let bill7 = new Bill();
let bill8 = new Bill();
let bill9 = new Bill();

let ListBill = [bill1, bill2, bill3, bill4, bill5, bill6, bill7, bill8, bill9];
// let ListBill = [];
//
// for (let i = 0; i < 9; i++)
//      let billTable = new Bill();
// ListBill.push(billTable);