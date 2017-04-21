/**
 * Created by nik.tomashevskiy on 13.04.2017.
 */

function MyObject(){
    this.privateVariable = 10;
    function privateFunction(){
        return false;
    }
    this.publicMethod = function () {
        this.privateVariable++;
        return privateFunction();
    }

    this.publicVariable = function () {
        return this.privateVariable;
    }
}

var ins1 = new MyObject();
var ins2 = new MyObject();

ins2.publicMethod();

console.log(ins2.publicVariable());
console.log(ins2.publicVariable());