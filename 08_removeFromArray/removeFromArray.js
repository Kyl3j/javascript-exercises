const removeFromArray = function() {
    const args = Array.from(arguments);
    const array = args[0];
    const valuesToRemove = args.slice(1);
    
    return array.filter(item => !valuesToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
