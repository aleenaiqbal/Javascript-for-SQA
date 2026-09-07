/* Exercise 3 — URL Validation
Create:
const url = "https://example.com/thank-you";
Check whether the URL contains:
thank-you
Expected:
Thanks page detected
*/

const url = "https://example.com/thank-you";
if(url.includes("thank-you")){
    console.log("Thanks page detected");
}