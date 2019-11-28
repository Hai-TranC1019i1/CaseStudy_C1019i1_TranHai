//Phan nay dang khong su dung oop

// function displayDrinking(indexTable) {
//     let drawListDrinking = "<table width='1300' height='600'>";
//     let k = 0;
//     console.log('display', ListTable[indexTable].TypeOfDrinkAndAmout);
//     for (let i = 0; i < 2; i++) {
//         drawListDrinking += "<tr>";
//         for (let j = 0; j < 4; j++) {
//             drawListDrinking += "<td>" +
//                 "<img src=" + "'images/" + ListDrinking[k].name + ".jpg" + "' width='300' height='300'" +
//                 "onclick='clickAdd(" + k + "," + indexTable + ")'><br>" +
//                 "<p id='nameDrinking'>" + ListDrinking[k].name + "</p>" +
//                 "<p>Price: " + ListDrinking[k].price + ".000 VND</p>" +
//                 "<span id='amount'>Amount: </span>"
//                 + "<button id='subDrinking' onclick='clickSub(" + k + "," + indexTable + ")'>-</button><input type='number' value='" +
//                 ListTable[indexTable].TypeOfDrinkAndAmout[k] + "' id='amountDrinking" + k + "'>" +
//                 "<button id='addDrinking' onclick='clickAdd(" + k + "," + indexTable + ")'>+</button><br>" + "</td>";
//             k++;
//         }
//         ;
//         drawListDrinking += "</tr>";
//     }
//     ;
//     drawListDrinking += "<tr><td colspan='4'><br><input onclick='saveAndBackHome(" + indexTable + ")' value='Order' " +
//         "type='button'><input onclick='payBill(" + indexTable + ")' value='Pay' type='button'>" +
//         "<input type='button' value='CleanTable' onclick='emptyTable(" + indexTable + ")'><br></td></tr></table>";
//     display.innerHTML = drawListDrinking;
// };
//
// function displayMainApp() {
//     let drawTable = "<table width='1300' height='600'>";
//     let k = 0;
//     for (let i = 0; i < 3; i++) {
//         drawTable += "<tr>";
//         for (let j = 0; j < 3; j++) {
//             drawTable += "<td style='border:1px solid #000000; text-align: center; ; background-color: " +
//                 ListTable[k].colorStt() + "' " + "onclick= 'displayDrinking(" + k + ")'>Table " + k + "</td>"
//             k++;
//         }
//         ;
//         drawTable += "</tr>";
//     }
//     ;
//     drawTable += "</table>";
//     display.innerHTML = drawTable;
// };
//
// function displayLogo() {
//     let logo = "<img src='images/logo.png' width='1340' height='630' onclick='displayMainApp()'>";
//     display.innerHTML = logo;
// };
//
// function init() {
//     this.displayLogo();
// };
//
// let display = document.getElementById('displayApp');
//
// init();

let Screen = function () {
    this.screenDrinking = function(indexTable) {
        let drawListDrinking = "<table width='1300' height='600'>";
        let k = 0;
        for (let i = 0; i < 2; i++) {
            drawListDrinking += "<tr>";
            for (let j = 0; j < 4; j++) {
                drawListDrinking += "<td>" +
                    "<img src=" + "'images/" + ListDrinking[k].name + ".jpg" + "' width='300' height='300'" +
                    "onclick='clickAdd(" + k + "," + indexTable + ")'><br>" +
                    "<p id='nameDrinking'>" + ListDrinking[k].name + "</p>" +
                    "<p>Price: " + ListDrinking[k].price + ".000 VND</p>" +
                    "<span id='amount'>Amount: </span>"
                    + "<button id='subDrinking' onclick='clickSub(" + k + "," + indexTable + ")'>-</button><input type='number' value='" +
                    ListTable[indexTable].TypeOfDrinkAndAmout[k] + "' id='amountDrinking" + k + "'>" +
                    "<button id='addDrinking' onclick='clickAdd(" + k + "," + indexTable + ")'>+</button><br>" + "</td>";
                k++;
            }
            ;
            drawListDrinking += "</tr>";
        }
        ;
        drawListDrinking += "<tr><td colspan='4'><br><input onclick='saveAndBackHome(" + indexTable + ")' value='Order' " +
            "type='button'><input onclick='payBill(" + indexTable + ")' value='Pay' type='button'>" +
            "<input type='button' value='CleanTable' onclick='emptyTable(" + indexTable + ")'><br></td></tr></table>";
        display.innerHTML = drawListDrinking;
    };

    this.screenHomeApp =function() {
        let drawTable = "<table width='1300' height='600'>";
        let k = 0;
        for (let i = 0; i < 3; i++) {
            drawTable += "<tr>";
            for (let j = 0; j < 3; j++) {
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
        let logo = "<img src='images/logo.png' width='1340' height='630' onclick='displayMainApp()'>";
        display.innerHTML = logo;
    };

    this.init = function f() {
        this.screenLogo();
    };

}