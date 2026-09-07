const websites = [
    { name: "Google", responseTime: 1.2 },
    { name: "Example", responseTime: 5.4 },
    { name: "GitHub", responseTime: 1.8 },
    { name: "TestSite", responseTime: 4.8 }
]

const ResName = websites.filter(website => website.responseTime > 3).map(website => website.name);
console.log(ResName);