import { websiteCheck } from "./utils/websiteChecker.js";
import { SignupCheck } from "./utils/signupChecker.js";
import { currencyCheck } from "./utils/currencyChecker.js";

const resWeb = websiteCheck("Passed");
const resSign = SignupCheck("Passed");
const rescurrency = currencyCheck("GBP");

console.log(resWeb);
console.log(resSign);
console.log(rescurrency);