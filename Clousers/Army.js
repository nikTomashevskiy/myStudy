/**
 * Created by nik.tomashevskiy on 13.04.2017.
 */
function createFunctions(){
    var result = new Array();
    for (var i=0; i < 10; i++){
        result[i] = function(){
            return i;
        };
    }
    return result;
}

var array = createFunctions();

array.forEach(function (item,iter) {
    console.log(item());
});
// console.log(array);