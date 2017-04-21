function SuperType(){
    this.property = true;
};

SuperType.prototype.getSuperValue = function () {
    return this.property;
};


function Subtype(){
    this.subproperty = false;
};

Subtype.prototype = new SuperType();

Subtype.prototype.getSubValue = function () {
    return this.subproperty;
}

Subtype.prototype.getSuperValue = function () {
    return false;
}

var instance = new Subtype();


console.log(instance.getSubValue());
console.log(instance.getSuperValue());