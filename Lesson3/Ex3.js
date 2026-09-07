const results = [
    { test: "Login", status: "Passed" },
    { test: "Signup", status: "Failed" },
    { test: "Checkout", status: "Passed" },
    { test: "Logout", status: "Failed" }
];
const failedTests = results.filter((test)=>{
    return test.status === "Failed";
});

console.log(failedTests);