function websiteCheck(status) {

    if (status === "Passed") {
        return "Website: Passed";
    } else {
        return "Website: Failed";
    }
}

export { websiteCheck };