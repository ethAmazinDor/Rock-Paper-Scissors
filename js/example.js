
function add7(n) {
    return n + 7
}

function multi(n1, n2) {
    return n1 * n2
}

function capital(str) {
    let words = str.split('')

    for (let i = 0; i < words.length; i++) {
        words[0] = words[0].charAt(0).toUpperCase()
    }

    joinedWords = words.join('')

    return joinedWords
}

function lastLetter(word) {
    let last = ''
    wordArr = word.split('')
    return wordArr[word.length - 1]

}

const results = document.querySelector('#results');

function calculate() {
    for (let i = 1; i < 10; i++) {
        const newResult = `${i} x ${i} = ${i * i} | `;
        results.textContent += `${newResult} \n`;
    }
    results.textContent += '\n...finished!';
}

const calculateBtn = document.querySelector('#calculate');
const clearBtn = document.querySelector('#clear');

calculateBtn.addEventListener('click', calculate);
clearBtn.addEventListener('click', () => results.textContent = '');

let cats = ['ancine', 'sphyx', 'stick']

let myFavorite = 'my favorite cats are'

for (const cat in cats) {
    myFavorite = `${myFavorite}${cat}`

}

console.log(myFavorite)