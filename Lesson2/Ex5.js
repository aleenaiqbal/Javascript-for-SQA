/*Create 3 test results:
Login → Passed → 1.2 seconds
Signup → Failed → 3.5 seconds
Checkout → Passed → 2.1 seconds
Store them as an array of objects.
Then use a loop to print only the failed test.
Expected:
Failed test: Signup
Response time: 3.5 seconds
*/

const testResults = [
    {
        name: "Login",
        status: "Passed",
        responseTime: 1.2
    },
    {
        name: "Signup",
        status: "Failed",
        responseTime: 3.5
    },
    {
        name: "Checkout",
        status: "Passed",
        responseTime: 2.1
    }

];

for(const test of testResults){
    if(test.status==="Failed"){
        console.log("Failed test:", test.name);
        console.log("Response time:", test.responseTime, "seconds");
    }
}