/* Exercise 4 — QA Challenge
Create:
async function checkResponseTime() {

    // pretend the website takes 2 seconds

}
Use a Promise to simulate the 2-second operation.
Then print:
Checking website...
Website responded
Test completed
*/

async function checkResponseTime() {
    console.log("Checking website...");

    await new Promise(resolve => {
        setTimeout(resolve, 2000);
    });

    console.log("Website Responded");
    console.log("Test Completed");

}
checkResponseTime();