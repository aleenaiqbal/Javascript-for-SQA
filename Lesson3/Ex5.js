const results = [
    { test: "Login", status: "Passed" },
    { test: "Signup", status: "Failed" },
    { test: "Checkout", status: "Passed" },
    { test: "Logout", status: "Failed" }
];

const failedTests = results.filter(result => result.status === "Failed").map(result => result.test);
console.log(failedTests);
