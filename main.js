const { checkISBN } = require('./isbn')

document.getElementById('isbnOK').style.visibility = 'hidden'
document.getElementById('isbnCorrupt').style.visibility = 'hidden'

function check() {
    const userinput = document.querySelector('#userinput').value

    if (checkISBN(userinput) === true) {
        document.getElementById('isbnOK').style.visibility = 'visible'
    }
    else {
        document.getElementById('isbnCorrupt').style.visibility = 'visible'
    }
    //document.querySelector('#result').innerHTML = checkISBN(userinput)
}

const button = document.querySelector('#check')
button.addEventListener('click', check)