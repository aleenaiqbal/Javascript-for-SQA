/*Exercise 1 — Strings
Create:
const email = "  ALEENA@GMAIL.COM  ";
Your code should:
Remove spaces
Convert it to lowercase
Check whether it ends with @gmail.com
Expected:
aleena@gmail.com
*/

const email = "  ALEENA@GMAIL.COM  ";
const space = email.trim();
const lowercase = space.toLowerCase();
const endwith = lowercase.endsWith("@gmail.com");
console.log(lowercase);
console.log(endwith);
