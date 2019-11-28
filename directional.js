// function clickAdd(indexDrink, indexTable) {
//     let idAmount = 'amountDrinking' + indexDrink;
//     ListTable[indexTable].TypeOfDrinkAndAmout[indexDrink] = document.getElementById(idAmount).value;
//     ListTable[indexTable].addAmount(indexDrink);
//     document.getElementById(idAmount).value = ListTable[indexTable].TypeOfDrinkAndAmout[indexDrink];
// };
//
// function clickSub(indexDrink, indexTable) {
//     let idAmount = 'amountDrinking' + indexDrink;
//     if (ListTable[indexTable].TypeOfDrinkAndAmout[indexDrink] > 0) {
//         ListTable[indexTable].TypeOfDrinkAndAmout[indexDrink] = document.getElementById(idAmount).value;
//         ListTable[indexTable].subAmount(indexDrink);
//         document.getElementById(idAmount).value = ListTable[indexTable].TypeOfDrinkAndAmout[indexDrink];
//     }
//     ;
// };
//
// function payBill(index) {
//     console.log(ListTable[index].TypeOfDrinkAndAmout);
//     for (let i = 0; i < ListDrinking.length; i++)
//         if (ListTable[index].TypeOfDrinkAndAmout[i] != 0) {
//             ListBill[index].payAndPrintBill(index);
//             ListTable[index].havePaid = true;
//             ListTable[index].isEmty = false;
//             return;
//         }
// }
//
// function emptyTable(index) {
//     console.log(ListTable[index].TypeOfDrinkAndAmout);
//     ListTable[index].isEmty = true;
//     ListTable[index].havePaid = false;
//     ListTable[index].resetTable();
//     displayMainApp();
// }
//
// function saveAndBackHome(index) {
//     console.log(ListTable[index].TypeOfDrinkAndAmout);
//     for (let i = 0; i < ListDrinking.length; i++)
//         if (ListTable[index].TypeOfDrinkAndAmout[i] != 0) {
//             ListTable[index].isEmty = false;
//             break;
//         }
//    displayMainApp();
// };
//
// let display = document.getElementById('displayApp');
// let screen = new Screen();
//
// init();

function clickAdd(indexDrink, indexTable) {
    let idAmount = 'amountDrinking' + indexDrink;
    ListTable[indexTable].TypeOfDrinkAndAmout[indexDrink] = document.getElementById(idAmount).value;
    ListTable[indexTable].addAmount(indexDrink);
    document.getElementById(idAmount).value = ListTable[indexTable].TypeOfDrinkAndAmout[indexDrink];
};

function clickSub(indexDrink, indexTable) {
    let idAmount = 'amountDrinking' + indexDrink;
    if (ListTable[indexTable].TypeOfDrinkAndAmout[indexDrink] > 0) {
        ListTable[indexTable].TypeOfDrinkAndAmout[indexDrink] = document.getElementById(idAmount).value;
        ListTable[indexTable].subAmount(indexDrink);
        document.getElementById(idAmount).value = ListTable[indexTable].TypeOfDrinkAndAmout[indexDrink];
    }
    ;
};

function payBill(index) {
    console.log(ListTable[index].TypeOfDrinkAndAmout);
    for (let i = 0; i < ListDrinking.length; i++)
        if (ListTable[index].TypeOfDrinkAndAmout[i] != 0) {
            ListBill[index].payAndPrintBill(index);
            ListTable[index].havePaid = true;
            ListTable[index].isEmty = false;
            return;
        }
}

function displayMainApp() {
    screen.screenHomeApp();
}

function displayDrinking(index) {
    screen.screenDrinking(index);
}

function emptyTable(index) {
    if (!ListTable[index].isEmty &&  !ListTable[index].havePaid)
        return;
    else {
        ListTable[index].isEmty = true;
        ListTable[index].havePaid = false;
        ListTable[index].resetTable();
        displayMainApp();
    }
}

function saveAndBackHome(index) {
    console.log(ListTable[index].TypeOfDrinkAndAmout);
    for (let i = 0; i < ListDrinking.length; i++)
        if (ListTable[index].TypeOfDrinkAndAmout[i] != 0) {
            ListTable[index].isEmty = false;
            break;
        }
    displayMainApp();
};
