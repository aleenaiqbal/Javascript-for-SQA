/* ⭐ Task 5 — Real SQA challenge
Create this:
const testResult = {
    testName: "Signup Form",
    status: "Passed",
    responseTime: 1200,
    browser: "Chromium"
};
Write a function:
validateTestResult(testResult)
It should:
Check that testName exists
Check that status exists
Check that responseTime exists
If everything exists → Test Result Valid
Otherwise → throw an error
Handle the error using try...catch
*/

const testResult = {
    testName: "Signup Form",
    status: "Passed",
    responseTime: 1200,
    browser: "Chromium"
};

function validateTestResult(testResult){
    if(testResult.testName && testResult.status && testResult.responseTime){
        return "Test Result Valid";
    }else{
        throw new Error("Test Result Invalid");
    }
}
try{
    console.log(validateTestResult(testResult));
}catch(error){
    console.log(error.message);

}