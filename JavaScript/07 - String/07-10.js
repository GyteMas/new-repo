/*
Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case. 
Test Data :
console.log(swapcase('AaBbc'));
"aAbBC"
*/
function swapCase(input) {
    // Use the replace method with a regular expression to match lowercase and uppercase letters separately
    return input.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        // For each match, if chr (lowercase letter) exists, convert it to uppercase; otherwise, convert the match (uppercase letter) to lowercase
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
// Output the result of applying the swapcase function to the string 'AaBbc'
console.log(swapCase('AaBbc'));
