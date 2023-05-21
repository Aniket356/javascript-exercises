const removeFromArray = function(arr, ...args) {
    const resultArray = arr.filter(function (element) {
        return !args.includes(element);
    })
    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
