const removeFromArray = function(numbers, ...numToDelete) {
        let newArray = numbers.filter(number => !numToDelete.includes(number));
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
 