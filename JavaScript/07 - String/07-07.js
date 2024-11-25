/*
Write a JavaScript function to parameterize a string. 
Test Data :
console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa"
*/
function stringParameterize(input) {
    return input.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
};
console.log(stringParameterize("Robin Singh from USA."));
