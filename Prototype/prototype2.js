/**
 * Created by nik.tomashevskiy on 11.04.2017.
 */
function SuperType(name){
    this.color = ["red","blue","green"];
    this.name = name;
}
SuperType.prototype.SayName = function () {
    console.log(this.name);
};

function Subtype(name,age){
    SuperType.call(this, name);
    this.age = age;
}

Subtype.prototype = new SuperType();

Subtype.prototype.SayAge = function () {
    console.log(this.age);
};


var instance = new Subtype("Nikolka",29);

instance.color.push("black");

var instance2 = new Subtype();

console.log(instance.color, instance.name,instance.age);
console.log(instance2.color);

instance2.SayName();
instance2.SayAge();

