/*
 *  README!!!
 *  For the problems below, use only string methods / conditionals, etc
 *  it may be tempting to use concepts like looping but do not attempt! 
 */
 
 
/* 1
    @func makeEven
    @param {string} str
    @returns {string}
    @desc - if the input string is odd number of characters, 
            add a "#" to make it even number of characters
            otherwise return string
    @example - makeEven('taq');  // 'taq#'
    @example - makeEven('john'); // 'john'
*/
const makeEven = str => {
    if(str.length%2 != 0){
        return str + '#';
    }
    else{
        return str;
    }
}
console.log(makeEven("taq"));
console.log(makeEven("john"));
console.log("")//New line for organization
/* 2
    @func getLastChar
    @param {string} str
    @returns {string}
    @desc - return the last character in string
    @example - getLastChar('taq'); // 'q'
*/
const getLastChar = str => str[str.length-1];
console.log("The last char of 'people' is:" + getLastChar("people"));
console.log("")//New line for organization
/* 3
    @func get3rdChar
    @param {string} str
    @returns {string}
    @desc - return the third character in string
    @example - get3rdChar('taq'); // 'q'
    @example - get3rdChar('mo'); // 'not enough characters!'
*/
const get3rdChar = str => {
    if (str.length < 3){
        return "Not enough characters!";
    }
    else
        return str[2];
}
console.log("The 3rd char of 'people' is:" + get3rdChar("people"));
console.log("The 3rd char of 'taq' is:" + get3rdChar("taq"));
console.log("The 3rd char of 'mo' is:" + get3rdChar("mo"));
console.log("")//New line for organization
/* 4
    @func get3rdCharFromEnd
    @param {string} str
    @returns {string}
    @desc - return the third character _FROM THE END_ in string
    @example - get3rdCharFromEnd('taq'); // 't'
    @example - get3rdCharFromEnd('mo'); // 'not enough characters!'
    @example - get3rdCharFromEnd('taq karim'); // 'r'
*/
const get3rdCharFromEnd = str => {
    if (str.length < 3){
        return "Not enough characters!";
    }
    else
        return str[str.length-3];
}
console.log("The 3rd char from the end of 'people' is:" + get3rdCharFromEnd("people"));
console.log("The 3rd char from the end of 'taq' is:" + get3rdCharFromEnd("taq"));
console.log("The 3rd char from the end of 'mo' is:" + get3rdCharFromEnd("mo")); 
console.log("The 3rd char from the end of 'taq karim' is:" + get3rdCharFromEnd("taq karim"));
console.log("")//New line for organization
/* 5
    @func startsWithVowel
    @param {string} str
    @returns {boolean}
    @desc - if string STARTS with vowel, return true
    @example - startsWithVowel('taq'); // false
    @example - startsWithVowel('Dfghjkl'); // false
    @example - startsWithVowel('andy'); // true
    @example - startsWithVowel('Andy'); // true
*/
const startsWithVowel = str => {
    let vowels = ['a','e','i','o','u'];
    let nStr = str.toLowerCase()
    for(let i = 0; i <= vowels.length; i++){
        if (nStr[0] == vowels[i]){
            return true;
    }
    return false;
    }
}
console.log("Does 'taq' start with a vowel? " + startsWithVowel("taq"));
console.log("Does 'Dfghjkl' start with a vowel? " + startsWithVowel("Dfghjkl"));
console.log("Does 'andy' start with a vowel? " + startsWithVowel("andy"));
console.log("Does 'Andy' start with a vowel? " + startsWithVowel("Andy"));
console.log("")//New line for organization
/* 6
    @func endsWithVowel
    @param {string} str
    @returns {boolean}
    @desc - if string ENDS with vowel, return true
    @example - endsWithVowel('taq'); // false
    @example - endsWithVowel('Dfghjkl'); // false
    @example - endsWithVowel('andi'); // true
    @example - endsWithVowel('AndI'); // true
*/
const endsWithVowel = str => {
    let vowels = ['a','e','i','o','u'];
    let nStr = str.toLowerCase();
    for(let i = 0; i <= vowels.length; i++){
        if (vowels[i] == nStr[nStr.length-1]){
            return true;
    }
    console.log(nStr[3])
    return false;
    }
}
console.log(endsWithVowel("andie"));
console.log("")//New line for organization
/* 7
    @func hasVowels
    @param {string} str
    @returns {boolean}
    @desc - if string has at least one vowel, return true
    @example - hasVowels('taq'); // true
    @example - hasVowels('TAQ'); // true
    @example - hasVowels('dfghjkl'); // false
    @example - hasVowels('taq karim'); // true
*/
const hasVowel = str => {
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    for(let i = 0; i <= str.length; i++){
        for(let j = 0; j <= 10; j++){
            if (str[i] == vowels[j]){
                return true;
            }
        }
    return false;
    }
}

/* 8
    @func hasUpperCase
    @param {string} str
    @returns {boolean}
    @desc - if string has at least one uppercase letter, return true
    @example - hasUpperCase('tAq'); // true
    @example - hasUpperCase('TAQ'); // true
    @example - hasUpperCase('tag'); // false
    @example - hasUpperCase('taq karim'); // false
*/

/* 9
    @func isPalindromic
    @param {string} str
    @returns {boolean}
    @desc - if string is a palindrome (ie: the same forward and backwards, like "racecar") return true
    @example - isPalindromic('racecar'); // true
    @example - isPalindromic('racecars'); // false
    @example - isPalindromic('bats see bees stab'); // false
    @example - hasUpperCase('taq karim'); // false
*/

/* 10
    @func getInitials
    @param {string} str
    @returns {string}
    @desc - given a name (ie: "taq karim"), return the initials (ie: "tk")
            assume there will always be at least one space between first name/last name
            assume only first and last names are provided
    @example - getInitials('taq karim'); // "tk"
    @example - getInitials('mo    mosayed'); // "mm"
    @example - getInitials('John       Smith'); // "js"
    @example - getInitials('sue RonaN'); // "sr"
*/

/* 11
    @func isPerfectStr
    @param {string} str
    @returns {boolean}
    @desc - a "perfect" string (not real, I just made this up) is defined to be a string such that:
            1. has more than three characters
            2. the three middle characters are arranged such that first character is vowel,
                second character is consonant and last character is another vowel
            3. the three middle characters are palindromic
    @example - isPerfectStr('ab'); // false
    @example - isPerfectStr('aba'); // true
    @example - isPerfectStr('asdfaeKeccc'); // false
    @example - isPerfectStr('asdfaeKeccccc'); // true
*/

/* 12
    @func strMasher
    @param {string} str1
    @param {string} str2
    @returns {string}
    @desc - given two strings, str1 and str2, return a new string
            with str2 mashed into the middle of str1
    @example - strMasher('help', 'me'); // "hemelp"
    @example - capitalLast('hello', 'wrold'); // "helwroldlo"
*/

