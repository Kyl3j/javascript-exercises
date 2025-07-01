const repeatString = function(word, times) {
    if (times < 0) {
        return 'ERROR';
    }
    
    let emptyWord=""

    for (let i = 0; i < times; i++) {
        emptyWord += word;
    }
    return emptyWord;


};

// Do not edit below this line
module.exports = repeatString;
