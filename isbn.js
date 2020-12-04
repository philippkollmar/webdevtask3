function checkISBN(digits) {
    let stringSplit = digits.split("-").join("");
    let stringSliced = stringSplit.substring(0, 9);
    let factor = 1;
    let sum = 0;


    for (let i = 0; i < stringSliced.length; i++) {
        parsedChar = parseInt(stringSliced[i])
        sum = sum + factor * parsedChar
        factor += 1
    }
    let checkdigit = sum % 11;

    if (checkdigit === 10) {
        checkdigit = "X"
    }
    if (stringSplit[9] === checkdigit.toString()) {
        return true;
    }
    return false;

}

module.exports = {
    checkISBN
}