const website = [
    {
        name: "Google",
        url: "google.com",
        status: "Passed",
        responseTime: 1.2
    },

    {
        name: "Youtube",
        url: "youtube.com",
        status: "Passed",
        responseTime: 2.6
    },

    {
        name: "Facebook",
        url: "facebook.com",
        status: "Failed",
        responseTime: 5.5
    },

    {
        name: "Instagram",
        url: "instagram.com",
        status: "Passed",
        responseTime: 1.2
    },

    {
        name: "Twitter",
        url: "twitter.com",
        status: "Failed",
        responseTime: 6
    }
];

for (const websites of website) {

    if (websites.status === "Failed") {

        console.log("Failed test:", websites.name);
        console.log("Response time:", websites.responseTime, "seconds");

    }
}