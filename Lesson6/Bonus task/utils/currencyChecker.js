function currencyCheck(currency) {

    if (currency === "GBP") {
        return "Currency: GBP";
    } else if (currency === "Dollar") {
        return "Currency: Dollar";
    } else {
        return "Unknown currency found";
    }
}

export { currencyCheck };