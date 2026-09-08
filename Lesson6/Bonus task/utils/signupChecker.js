function SignupCheck(status) {

    if (status === "Passed") {
        return "Signup: Passed";
    } else {
        return "Signup: Failed";
    }
}

export { SignupCheck };