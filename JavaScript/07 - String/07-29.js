/*
Write a JavaScript function to find a word within a string. 
Test Data :
console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
Output :
"'fox' was found 1 times."
"'aa' was found 2 times."
*/
function search_word(text, word) {
  let x = 0, y = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] == word[0]) {
      for (let j = i; j < i + word.length; j++) {
        if (text[j] == word[j - i]) {
          y++;
        }
        if (y == word.length) {
          x++;
        }
      }
      y = 0;
    }
  }
  return "'" + word + "' was found " + x + " times.";
}
console.log(search_word("The quick brown fox", "fox"));
console.log(search_word("aa, bb, cc, dd, aa", "aa"));
