const { checkISBN } = require('./isbn')
const { connectStrings } = require('./isbn')

function clear() {
    document.getElementById('isbnOK').style.visibility = 'hidden'
    document.getElementById('isbnCorrupt').style.visibility = 'hidden'
}

function check() {
    clear();
    const inputOne = document.querySelector('#inputOne').value
    const inputThree = document.querySelector('#inputThree').value
    const inputFive = document.querySelector('#inputFive').value
    const inputCheck = document.querySelector('#inputCheck').value
    let isValid = connectStrings(inputOne, inputThree, inputFive, inputCheck);

    if (isValid === true) {
        document.getElementById('isbnOK').style.visibility = 'visible'
    }
    else {
        document.getElementById('isbnCorrupt').style.visibility = 'visible'
    }

}
clear();

const update1 = document.querySelector('#inputOne')
const update2 = document.querySelector('#inputThree')
const update3 = document.querySelector('#inputFive')
const update4 = document.querySelector('#inputCheck')
update1.addEventListener('input', check)
update2.addEventListener('input', check)
update3.addEventListener('input', check)
update4.addEventListener('input', check)


var jumpInput = document.getElementsByClassName("inputFields")[0];
jumpInput.onkeyup = function(e) {
    var target = e.target;
    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() == "input") {
                next.focus();
                break;
            }
        }
    }
    else if (myLength === 0) {
        var previous = target;
        while (previous = previous.previousElementSibling) {
            if (previous == null)
                break;
            if (previous.tagName.toLowerCase() === "input") {
                previous.focus();
                break;
            }
        }
    }
}
