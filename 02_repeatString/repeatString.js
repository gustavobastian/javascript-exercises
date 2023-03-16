const repeatString = function(data,numberP) {
    let number=parseInt(numberP);
    let out="";
    
    if(number<0){
        return "ERROR";
    }
    for (let i=0;i<number;i++)
    {        
        let local=out;
        out=local+data;
    }
    return out;
};

// Do not edit below this line
module.exports = repeatString;
