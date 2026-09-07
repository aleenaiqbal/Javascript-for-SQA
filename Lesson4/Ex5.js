/* Exercise 5 — QA Challenge
Create:
const test = {
    name: "Signup",
    status: "Failed",
    responseTime: 5200
};
Use destructuring and produce:
Test: Signup
Status: Failed
Response Time: 5.2 seconds
Then add a condition:
If response time > 5 seconds
→ "Performance issue detected"
Expected:
Test: Signup
Status: Failed
Response Time: 5.2 seconds
Performance issue detected
*/

const test = {
    name: "Signup",
    status: "Failed",
    responseTime: 5200
};

const{
    name,
    status,
    responseTime
}= test

const seconds = responseTime/1000;

console.log(`Test: ${name} | Status: ${status} | Response Time: ${seconds}s `);
if(seconds>5){
    console.log("Performace issue detected");
}