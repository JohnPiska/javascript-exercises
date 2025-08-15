const reverseString = function(string) {
    let newString = "";
    let splittedStr = string.split('');
    for(let i = splittedStr.length - 1; i >= 0; i--){
        newString += splittedStr[i];
    }
    return newString;
}; 

// Do not edit below this line
module.exports = reverseString;
