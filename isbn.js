function checkISBN(digits) {
    let stringSplit = digits.split("-").join(""); 
    let factor = 1;
    let sum = 0;


    for (let i = 0; i < stringSplit.length; i++) {
        parsedChar = parseInt(stringSplit[i])
        sum = sum + factor * parsedChar
        factor += 1
    }
    let checkdigit = sum % 11;

    if(checkdigit === 10){
        return "X"
    }
    return checkdigit.toString();
}

module.exports = {
    checkISBN
}