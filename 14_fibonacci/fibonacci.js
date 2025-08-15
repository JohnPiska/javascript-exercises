const fibonacci = function(ind) {
    let index = parseInt(ind);
    if(index <= 1 && index >= 0){
        return index;
    }
    else if(index < 0){
        return "OOPS"
    }
    let a = 0;
    let b = 1;
    for(let i = 2; i <= index; i++){
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
