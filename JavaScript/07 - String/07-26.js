/*
Write a JavaScript function to remove the first occurrence of a given 'search string' from a string. 
Test Data :
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
Output :
"The quick brown fox jumps over lazy dog"
*/
function remove_first_occurrence(str, searchstr) {
    const index = str.indexOf(searchstr);
    if (index === -1) {
        return str;
    }
   return str.slice(0, index) + str.slice(index + searchstr.length);
}

console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));

