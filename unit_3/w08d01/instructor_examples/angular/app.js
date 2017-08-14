const app = angular.module('MyApp', []);

app.controller('MyController', [function(){
    this.hello = 'oh hai!';
    this.isActive = true;
    this.items = ['apple', 'apple', 'pear'];
    this.divExists = false;
    this.hideDiv = true;
    this.showDiv = false;
    this.imgSrc = 'http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg'

    this.someProperty = 'foo';

    this.handleClick = function(){
        this.hideDiv = !this.hideDiv;
    }

    this.handleSubmit = function(){
        this.items.push(this.someProperty);
    }
}]);
