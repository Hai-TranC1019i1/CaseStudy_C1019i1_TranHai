function clickAdd(indexDrink) {
    let idAmount = 'amountDrinking' + indexDrink;
    document.getElementById(idAmount).value = 1 + Number(document.getElementById(idAmount).value);
    console.log(document.getElementById(idAmount).value);
};

function clickSub(indexDrink, indexTable) {
    let idAmount = 'amountDrinking' + indexDrink;
    if (document.getElementById(idAmount).value > 0 && !ListTable[indexTable].havePaid) { //Chỉ trừ khi số lượng là dương, và khách chưa trả tiền
        document.getElementById(idAmount).value = Number(document.getElementById(idAmount).value) - 1;
    }
    ;
};

function getDataAmount(index) {
    let idAmount = '';
    for (let i = 0; i < ListDrinking.length; i++) {
        idAmount = 'amountDrinking' + i;
        if (document.getElementById(idAmount).value != 0) {
            ListTable[index].TypeOfDrinkAndAmout[i] = document.getElementById(idAmount).value;
        }
    }
}

function displayMainApp() {
    screen.screenHomeApp();
}

function displayDrinking(index) {
    screen.screenDrinking(index);
}

function emptyTable(index) {
    if (!ListTable[index].isEmty &&  !ListTable[index].havePaid) // Ngăn việc clean bàn khi khách chưa trả tiền
        return;
    else {
        ListTable[index].isEmty = true;
        ListTable[index].havePaid = false;
        ListTable[index].resetTable();
        displayMainApp();
    }
}


function payBill(index) {
    getDataAmount(index);
    for (let i = 0; i < ListDrinking.length; i++)
        if (ListTable[index].TypeOfDrinkAndAmout[i] != 0) {
            ListBill[index].payAndPrintBill(index);
            ListTable[index].havePaid = true;
            ListTable[index].isEmty = false;
            return;
        }

}


function saveAndBackHome(index) {
    getDataAmount(index);
    for (let i = 0; i < ListDrinking.length; i++)
        if (ListTable[index].TypeOfDrinkAndAmout[i] != 0) {
            ListTable[index].isEmty = false;
            break;
        }
    displayMainApp();
};
