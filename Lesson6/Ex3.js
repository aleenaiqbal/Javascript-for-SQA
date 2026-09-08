/* Task 3 — Import both functions
Create:
main.js
Import both functions and test:
checkSignup("Passed");
checkCurrency("GBP");
Expected:
Signup Passed
Pound detected
*/

import { checkSignup } from "./Ex1.js";
import { checkCurrency } from "./Ex2.js";

const signResult = checkSignup("Passed");
const currencyResult = checkCurrency("GBP");

console.log(signResult);
console.log(currencyResult);