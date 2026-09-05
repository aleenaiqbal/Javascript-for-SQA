function checkWebsite(statusCode){
    if(statusCode===200){
        return "Passed"
    }
    else{
        return "Failed"
    }
}

let result = checkWebsite(200);
console.log(result);