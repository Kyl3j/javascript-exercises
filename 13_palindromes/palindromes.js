const palindromes = function (word) {
    emptyWord = "";
    compWord = "";
    
    funcWord = word.replace("!","");
    funcWord = funcWord.toLowerCase();
    wordSize = funcWord.length - 1;

    for (i = wordSize ; i >= 0; i--) {
        if (!(funcWord[i] == " ")){
            if (!(funcWord[i] == ",")){
                if (!(funcWord[i] == ".")){
                    emptyWord += funcWord[i];
                }
                
            }
            
        }
    }

    for (i = 0 ; i <= wordSize; i++) {
        if (!(funcWord[i] == " ")){
            if (!(funcWord[i] == ",")){
                if (!(funcWord[i] == ".")){
                    compWord += funcWord[i];
                }
                
            }
            
        }
    }

    //console.log(compWord, "\n" + emptyWord);

    if (compWord == emptyWord) {
        return true;
    }
    else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
