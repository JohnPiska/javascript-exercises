const palindromes = function (word) {
    cleanWord = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

    let revWord = cleanWord.split('').reverse().join('');
    if(cleanWord == revWord){
        return true;
    }
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
