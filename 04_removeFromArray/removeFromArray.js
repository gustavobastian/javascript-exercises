const removeFromArray = function(data,argument) {

    let index=data.indexOf(argument);
    let out= [];
    for (let i=0;i<data.length;i++){
        if(i!= index){
            out.push(data[i]);
        }
    }

    return out;
};

// Do not edit below this line
module.exports = removeFromArray;
