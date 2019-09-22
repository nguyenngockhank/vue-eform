import { observable, observe } from  './observable';

var assert = require('assert');


var invoice = observable({
    price: 100, 
    quantity: 2,
    get totalGross() {
        return (this.totalNet + this.totalTax) || 0;
    },
    
    get totalNet(){
        return this.price * this.quantity;
    },
    get totalTax() {
        return this.totalNet * 10 / 100;
    },
   
});


const MAX_COUNT = 3;
let updateTotalNetCount = 0;

var unwatch = observe(() => {
    updateTotalNetCount++;
    if ( updateTotalNetCount == MAX_COUNT) {
        unwatch();
    }
});


describe('Observable', function () {

    describe('# Mutating Attribute Test', function () {

        it('should `totalNet` return 200 after initilizing', function () {
            assert.equal(invoice.totalNet, 200);
        });


        it('should `totalNet` return 100 after reducing 1 quantiy', function () {
            invoice.quantity = invoice.quantity - 1;
            assert.equal(invoice.quantity, 1);
            assert.equal(invoice.totalNet, 100);
            assert.equal(invoice.totalTax, 10);
            assert.equal(invoice.totalGross, 110);
        });

        it('should `totalNet` return 50 after minus 50 from price', function () {
            invoice.price = invoice.price - 50;

            assert.equal(invoice.price, 50);
            assert.equal(invoice.totalNet, 50);
            assert.equal(invoice.totalTax, 5);
            assert.equal(invoice.totalGross, 55);
        });

        // 1 for init, 1 for update
        it('should `updateTotalNetCount` is less than 3 times', function() {
            assert.ok( updateTotalNetCount <= MAX_COUNT );
        });
    });

    
});