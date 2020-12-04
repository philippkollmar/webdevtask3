const { checkISBN } = require('./isbn')

function check() {
    const userinput = document.querySelector('#userinput').value
    document.querySelector('#result').innerHTML = checkISBN(userinput)
}

const button = document.querySelector('#check')
button.addEventListener('click', check)