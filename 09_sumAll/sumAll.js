const sumAll = function(firstNumber, secondNumber) {
    
    if(!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)){return 'ERROR';}
    if(firstNumber < 0 || secondNumber < 0){return 'ERROR';}
    else if(firstNumber > secondNumber){
        let temp = secondNumber;
        secondNumber = firstNumber;
        firstNumber = temp;
    }

    let summ = 0;
    for(let i = firstNumber; i <= secondNumber; i++){
    summ += i;
    } 
    return summ;
      
}; 

// Do not edit below this line
module.exports = sumAll;
