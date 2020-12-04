const { checkISBN } = require('./isbn')
function clear() {
    document.getElementById('isbnOK').style.visibility = 'hidden'
    document.getElementById('isbnCorrupt').style.visibility = 'hidden'
}

function check() {
    clear();
    const userinput = document.querySelector('#userinput').value

    if (checkISBN(userinput) === true) {
        document.getElementById('isbnOK').style.visibility = 'visible'
    }
    else {
        document.getElementById('isbnCorrupt').style.visibility = 'visible'
    }

}
clear();

const button = document.querySelector('#check')
button.addEventListener('click', check)