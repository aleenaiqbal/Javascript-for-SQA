function checkResponseTime(responseTime){
    if(responseTime<2){
        return "Excellent";
    }
    else if(responseTime<=4){
        return "Acceptable";
    }
    else{
        return "slow";
    }

}
console.log(checkResponseTime(1.5));
console.log(checkResponseTime(3));
console.log(checkResponseTime(5));
