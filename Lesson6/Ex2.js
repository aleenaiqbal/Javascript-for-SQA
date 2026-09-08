/* Task 2 — Create another function
Create:
function checkCurrency(currency)
If currency is:
USD
return:
Dollar detected
If:
GBP
return:
Pound detected
Otherwise:
Unknown currency
Export it.
*/

function checkCurrency(currency){
    if(currency === "USD"){
        return "Dollar detected";
    }
    else if(currency === "GBP"){
        return "Pound detected";
    }
    else{
        return "Unknown currency";
    }
}
export {checkCurrency};