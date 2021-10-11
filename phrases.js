function isValidExpression(input) {
    var isValid = true;
    var type=typeof input;
    var strArray;
    if (type==='string'){
        strArray = input.split('');
    }else{
        strArray=input;
    }
    do {
        var letter = strArray[0];
        var lowerCaseLetter = letter.toLowerCase();
        if(lowerCaseLetter<=letter){
            isValid=false;
            return isValid;
        }
        var index = strArray.indexOf(lowerCaseLetter,1)
        if (index === -1) {
            isValid = false;
            return isValid;
        } else {
            strArray.splice(index,1)
            strArray.splice(0,1);
            
        }
    } while (strArray.length > 0)
    return isValid;
    
}

