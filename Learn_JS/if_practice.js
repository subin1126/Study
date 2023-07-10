


function test(str) {
    var ret = '';
    for(let i=0; i<=str.length-1; i++){
        if(str === "a"){
            return "A";
        }
        if(str === ''){
            return "EMPTY";
        }
    }
    return ret;
}
console.log(test(''));