/* Exercise 4 — Object Destructuring
Create:
const website = {
    name: "Google",
    status: "Passed",
    responseTime: 1200
};
Use destructuring to get:
name
status
responseTime
Then print:
Google → Passed → 1.2 seconds
*/

const website = {
    name: "Google",
    status: "Passed",
    responseTime: 1200
};

const{
    name,
    status,
    responseTime
}= website;

console.log(name);
console.log(status);
console.log(`${responseTime/1000} seconds`);