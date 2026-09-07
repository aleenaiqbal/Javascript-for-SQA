const results = [
    { test: "Login", status: "Passed" },
    { test: "Signup", status: "Failed" },
    { test: "Checkout", status: "Passed" },
    { test: "Logout", status: "Failed" }
];

const resultTest = results.map(result=>result.test);
console.log(resultTest);