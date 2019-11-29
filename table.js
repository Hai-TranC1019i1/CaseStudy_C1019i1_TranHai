let Table = function (idTable) {
    this.id = idTable;
    this.havePaid = false;
    this.isEmty = true;
    this.TypeOfDrinkAndAmout = new Array(ListDrinking.length);

    this.addAmount = function(index) {
        this.TypeOfDrinkAndAmout[index]++;
    };
    this.subAmount = function(index) {
        this.TypeOfDrinkAndAmout[index]--;
    };
    this.colorStt = function () {
        if (this.isEmty) {
            return 'white';
        }
        else if (this.havePaid)
            return 'green';
        else
            return 'red';
    };
    this.resetTable = function () {
        for (let i = 0; i < ListDrinking.length; i++) {
            this.TypeOfDrinkAndAmout[i] = 0;
        }
    };
};


