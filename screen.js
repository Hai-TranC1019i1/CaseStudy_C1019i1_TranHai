let Screen = function (rowDrink, rowTable, columnDrink, columnTable) {
    this.rowDrink = rowDrink;
    this.rowTable = rowTable;
    this.columnDrink = columnDrink;
    this.columnTable = columnTable;

    this.screenDrinking = function(indexTable) {
        let drawListDrinking = "<table id='display'>";
        let k = 0;
        for (let i = 0; i < this.rowDrink; i++) {
            drawListDrinking += "<tr>";
            for (let j = 0; j < this.columnDrink; j++) {
                drawListDrinking += "<td>" +
                    "<img src=" + "'images/" + ListDrinking[k].name + ".jpg" + "' width='300' height='300'" +
                    "onclick='clickAdd("+ k +")'><br>" +
                    "<p id='nameDrinking'>" + ListDrinking[k].name + "</p>" +
                    "<p>Price: " + ListDrinking[k].price + ".000 VND</p>" +
                    "<span id='amount'>Amount: </span>"
                    + "<button id='subDrinking' onclick='clickSub("+ k +"," + indexTable + ")'>-</button><input type='number' value='" +
                    ListTable[indexTable].TypeOfDrinkAndAmout[k] + "' id='amountDrinking" + k + "'>" +
                    "<button id='addDrinking' onclick='clickAdd("+ k +")'>+</button><br>" + "</td>";
                k++;
            }
            ;
            drawListDrinking += "</tr>";
        }
        ;
        //<tr><td colspan='4'><br><input onclick='saveAndBackHome(" + indexTable + ")' value='Order' " +
        //             "type='button'><input onclick='payBill(" + indexTable + ")' value='Pay' type='button'>" +
        //             "<input type='button' value='CleanTable' onclick='emptyTable(" + indexTable + ")'><br></td></tr></table>
        drawListDrinking += "</table><hr><p id='linebutton'><input onclick='saveAndBackHome(" + indexTable + ")' value='Order'" +
            "type='button'><input onclick='payBill(" + indexTable + ")' value='Pay' type='button'>" +
            "<input type='button' value='CleanTable' onclick='emptyTable(" + indexTable + ")'</p>";
        display.innerHTML = drawListDrinking;
    };

    this.screenHomeApp =function() {
        let drawTable = "<table id='display'>";
        let k = 0;
        for (let i = 0; i < this.rowTable; i++) {
            drawTable += "<tr>";
            for (let j = 0; j < this.columnTable; j++) {
                drawTable += "<td style='border:1px solid #000000; text-align: center; ; background-color: " +
                    ListTable[k].colorStt() + "' " + "onclick= 'displayDrinking(" + k + ")'>Table " + k + "</td>"
                k++;
            }
            ;
            drawTable += "</tr>";
        }
        ;
        drawTable += "</table>";
        display.innerHTML = drawTable;
    };

    this.screenLogo = function() {
        let logo = "<img src='images/logo.png' id='logo' onclick='displayMainApp()'>";
        display.innerHTML = logo;
    };

    this.init = function f() {
        this.screenLogo();
    };

}