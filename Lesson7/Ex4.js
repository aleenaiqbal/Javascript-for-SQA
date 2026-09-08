/* Task 4 — JSON conversion
Convert your website object into JSON using:
JSON.stringify()
Then convert it back using:
JSON.parse()
Finally print:
console.log(data.name);
*/

const website = {
    name: "Dissertation Helper",
    url: "https://example.com",
    status: 200,
    responseTime: 1500
};

const jsonData = JSON.stringify(website);
console.log(jsonData);

const webparse = JSON.parse(jsonData);
console.log(webparse.name);