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
//USED FOR LOOP.
// const startsWithVowel = str => {
//     let vowels = ['a','e','i','o','u'];
//     let nStr = str.toLowerCase()
//     for(let i = 0; i < vowels.length; i++){
//         if (nStr[0] == vowels[i])
//             return true;
//     }   
//     return false;
// }
const startsWithVowel = str => {
    let nStr = str.toLowerCase();
    if(nStr.charAt(0) === 'a' || nStr.charAt(0) === 'e' || nStr.charAt(0) === 'i' || nStr.charAt(0) === 'o' || nStr.charAt(0) === 'u')
        return true;
    else
        return false;
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
//USED FOR LOOP.
// const endsWithVowel = str => {
//     let vowels = ['a','e','i','o','u'];
//     let nStr = str.toLowerCase();
//     for(let i = 0; i < vowels.length; i++){
//         if (vowels[i] == nStr[nStr.length-1]){
//             return true;
//         }   
//     }
//     return false;
// }
const endsWithVowel = str => {
    let nStr = str.toLowerCase();
    if(nStr.charAt(nStr.length-1) === 'a' || nStr.charAt(nStr.length-1) === 'e' || nStr.charAt(nStr.length-1) === 'i' || nStr.charAt(nStr.length-1) === 'o' || nStr.charAt(nStr.length-1) === 'u')
        return true;
    else
        return false;
}
console.log("Does 'taq' end with vowel? " + endsWithVowel("taq"));
console.log("Does 'Dfghjkl' end with vowel? " + endsWithVowel("Dfghjkl"));
console.log("Does 'andi' end with vowel? " + endsWithVowel("andi"));
console.log("Does 'AndI' end with vowel? " + endsWithVowel("AndI"));
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
//USED FOR LOOP.
// const hasVowel = str => {
//     let vowels = ['a','e','i','o','u','A','E','I','O','U'];
//     for(let i = 0; i < str.length; i++){
//         for(let j = 0; j < vowels.length; j++){
//             if (str[i] == vowels[j]){
//                 return true;
//             }
//         }
//     }
//     return false;
// }
const hasVowel = str => {
    let nStr = str.toLowerCase();
    if(nStr.search('a') >= 0|| nStr.search('e') >= 0|| nStr.search('i') >= 0|| nStr.search('o') >=0|| nStr.search('u') >=0)
            return true;
    else
        return false;
}
console.log("Does 'taq' have at least one vowel? " + hasVowel('taq'));
console.log("Does 'TAQ' have at least one vowel? " + hasVowel('TAQ'));
console.log("Does 'dfghjkl' have at least one vowel? " + hasVowel('dfghjkl'));
console.log("Does 'taq karim' have at least one vowel? " + hasVowel('taq karim'));
console.log("")//New line for organization
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
// USED FOR LOOP.
// const hasUpperCase = str => {
//     for(let i = 0; i < str.length; i++){
//         for(let j = 65; j <= 90; j++){
//             if(str[i] == String.fromCharCode(j))
//                 return true;
//         }
//     }
//     return false;
// }
const hasUpperCase = str => {

    if(str.search('A') >=0 || str.search('B') >=0 || str.search('C') >=0 || str.search('D') >=0 || str.search('E') >=0 || str.search('F') >=0 || str.search('G') >=0 || str.search('H') >=0 || str.search('I') >=0 || str.search('J') >=0 || str.search('K') >=0 || str.search('L') >=0 || str.search('M') >=0 || str.search('N') >=0 || str.search('O') >=0 || str.search('P') >=0 || str.search('Q') >=0 || str.search('R') >=0 || str.search('S') >=0 || str.search('T') >=0 || str.search('U') >=0 || str.search('V') >=0 || str.search('W') >=0 || str.search('X') >=0 || str.search('Y') >=0 || str.search('Z') >=0)
        return true;
    else
        return false;
}
console.log("Does 'tAq' have an upper case? " + hasUpperCase('tAq'));
console.log("Does 'TAQ' have an upper case? " + hasUpperCase('TAQ'));
console.log("Does 'tag' have an upper case? " + hasUpperCase('tag'));
console.log("Does 'taq karim' have an upper case? " + hasUpperCase('taq karim'));
console.log("")//New line for organization
/* 9
    @func isPalindromic
    @param {string} str
    @returns {boolean}
    @desc - if string is a palindrome (ie: the same forward and backwards, like "racecar") return true
    @example - isPalindromic('racecar'); // true
    @example - isPalindromic('racecars'); // false
    @example - isPalindromic('bats see bees stab'); // false
    @example - isPalindromic('taq karim'); // false
*/
// const isPalindromic = str => {
//     let rts = [];
//     let p = str.length-1;
//     for(let i = 0; i < str.length; i++){
//         rts[p] = str[i]
//         p--;
//     }
//     for(let i = 0; i < str.length; i++){
//         if(rts.join('') == str)
//             return true;
//         else
//             return false;
//     }
// }
const isPalindromic = str => {
    let rts = str.split('');
    let rts2 = rts.reverse().join('');
    if(str == rts2)
        return true;
    else
        return false;
}
console.log("Is 'racecar' a palindrome? " + isPalindromic('racecar'));
console.log("Is 'racecars' a palindrome? " + isPalindromic('racecars'));
console.log("Is 'bats see bees stab' a palindrome? " + isPalindromic('bats see bees stab'));
console.log("Is 'taq karim' a palindrome? " + isPalindromic('taq karim'));
console.log("")//New Line for organization.
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
const getInitials = str => {
    let trimmed = str.trim();
    if(trimmed.lastIndexOf(' ')){
        return trimmed[0] + trimmed[trimmed.lastIndexOf(' ')+1];
    }
}
console.log("What is the initials of 'taq karim'? " + getInitials("taq karim"));
console.log("What is the initials of 'mo    mosayed'? " + getInitials("mo    mosayed"));
console.log("What is the initials of 'John       Smith'? " + getInitials("John       Smith"));
console.log("What is the initials of 'sue RonaN'? " + getInitials("sue RonaN"));
console.log();//New Line for organization.
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
const isPerfectStr = str1 => {
    str = str1.toLowerCase();
    let mid = Math.floor((str.length)/2);
    if(str.length < 3)
        return false;
    else{
        if(str[mid-1] == 'a'|| str[mid-1] == 'e' || str[mid-1] == 'i' || str[mid-1] == 'o' || str[mid-1] == 'u'){
            if(str[mid+1] == 'a'|| str[mid+1] == 'e' || str[mid+1] == 'i' || str[mid+1] == 'o' || str[mid+1] == 'u'){
                    if(str[mid] == 'b' || str[mid] == 'c' || str[mid] == 'd' || str[mid] == 'f' || str[mid] == 'g' || str[mid] == 'h' || str[mid] == 'j' || str[mid] == 'k' || str[mid] == 'l' || str[mid] == 'm' || str[mid] == 'n' || str[mid] == 'p' || str[mid] == 'q' || str[mid] == 'r' || str[mid] == 's' || str[mid] == 't' || str[mid] == 'u' || str[mid] == 'v' || str[mid] == 'x' || str[mid] == 'z' )
                        return true;
                    else
                        return false;
                }
            else
                return false;
        }
        else
            return false;
    }
}

console.log("Is 'ab' a perfect string? " + isPerfectStr('ab'));
console.log("Is 'aba' a perfect string? " + isPerfectStr('aba'));
console.log("Is 'asdfaeKeccc' a perfect string? " + isPerfectStr('asdfaeKeccc'));
console.log("Is 'asdfaeKeccccc' a perfect string? " + isPerfectStr('asdfaeKeccccc'));
console.log();//New Line for organization.
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
const strMasher = (str1, str2) => {
    const mid1 = str1.slice(0,Math.ceil(str1.length/2));
    const mid2 = str1.slice(Math.ceil(str1.length/2),str1.length);
    return mid1 + str2 + mid2;
}

console.log("'help' and 'me' mashed together is " + strMasher('help','me'));
console.log("'hello' and 'world' mashed together is " + strMasher('hello','wrold'));