const fibonacci = function(index_f) {
    index_f = parseInt(index_f);

    if (index_f==0){
        return 0;
    }

    if (index_f<0){
        return "OOPS";
    }

    array_f = [1];
    num_prev = 0;

    for (i=0; i<index_f; i++){
        num_current = array_f[i];
        array_f.push(num_prev+num_current)
        num_prev = num_current;
    }

    //console.log(array_f)

    return array_f[(index_f-1)];

};

// Do not edit below this line
module.exports = fibonacci;
