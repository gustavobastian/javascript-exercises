const palindromes = function (arrayp) {
    let array=[];
    for (const element of arrayp){
        if ((element=='!')||(element=='.')||(element==',')||(element==' '))
        {
          continue;
        }
        else{
            array.push(element.toLowerCase());
        }
    }        
    let value=(array.length)/2;
    for (let i= 0;i<value;i++){  
        
        if(array[i]!=array[array.length-i-1])
        {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
