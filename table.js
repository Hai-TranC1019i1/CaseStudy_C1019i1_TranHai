let Table = function (idTable) {
    this.id = idTable;
    //  this.bill = bill;
    this.havePaid = false;
    this.isEmty = true;
    this.TypeOfDrinkAndAmout = new Array(ListDrinking.length);

    this.addAmount = function(index) {
        this.TypeOfDrinkAndAmout[index]++;
    }
    this.subAmount = function(index) {
        this.TypeOfDrinkAndAmout[index]--;
    }

    this.colorStt = function () {
        if (this.isEmty) {
            return 'white';
        }
        else if (this.havePaid)
            return 'green';
        else
            return 'red';
    }
    this.screen = '';
    this.resetTable = function () {
        for (let i = 0; i < ListDrinking.length; i++) {
            this.TypeOfDrinkAndAmout[i] = 0;
        }
    }
};
//
//
// let Table1 = new Table('t001');
// let Table2 = new Table('t002');
// let Table3 = new Table('t003');
// let Table4 = new Table('t004');
// let Table5 = new Table('t005');
// let Table6 = new Table('t006');
// let Table7 = new Table('t007');
// let Table8 = new Table('t008');
// let Table9 = new Table('t009');
//
// let ListTable = [Table1, Table2, Table3, Table4, Table5, Table6, Table7, Table8, Table9];


