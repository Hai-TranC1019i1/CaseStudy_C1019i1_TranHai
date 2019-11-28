let Bill = function (idBill) {
    this.id = idBill;

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
        bill += "<tr><td>Total:</td><td></td><td>" + price + ".000 VND</td></tr></table>";
            bill += "<br><hr><br>";
            bill += "&nbsp;&nbsp;&nbsp;<input type='button' value='Home' onclick='displayMainApp()'>" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='CleanTable' onclick='emptyTable(" + index + ")'><br>";
        display.innerHTML = bill;
        stt++;
    };
}