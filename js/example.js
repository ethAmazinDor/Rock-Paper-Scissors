
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