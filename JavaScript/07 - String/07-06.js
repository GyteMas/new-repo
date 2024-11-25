/*
Write a JavaScript function to hide email addresses to protect from unauthorized user. 
Test Data :
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"
*/

function protectEmail(input) {
        let splitted = input.split("@");
        let part1 = splitted[0];
        let avg = part1.length / 2;
        part1 = part1.substring(0, (part1.length - avg));
        let part2 = splitted[1];
        return part1 + "...@" + part2;
}
console.log(protectEmail("robin_singh@example.com"));