const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let word = str
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');
 let reversed = word.split('').reverse().join(''); 
   return word === reversed;

}; 

// Do not edit below this line
module.exports = palindromes;
