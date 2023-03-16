const reverseString = function(data) {
    let info="";
    
    for (let i = data.length-1;i>=0;i--){
        info=info.concat(data[i]);
    }
    
    return info;
};

// Do not edit below this line
module.exports = reverseString;
