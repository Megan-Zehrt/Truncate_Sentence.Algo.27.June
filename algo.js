// 1816. Truncate Sentence



// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

// For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
// You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.






/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {

    let arrayWord = s.split(' ')
    let array = []

    for(let i = 0; i < arrayWord.length; i++){
        array.push(arrayWord[i])
    }
    
    let string = array[0]

    for(let i = 1; i < k; i++){
        string += ' ' + "" + array[i] + ""
    }

    return string
};