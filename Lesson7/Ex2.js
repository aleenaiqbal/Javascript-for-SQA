/* Task 2 — Website validation
Create:
function checkWebsite(statusCode)
Requirements:
200 → Website Passed
anything else → throw an error
Then handle the error using try...catch.
Test:
checkWebsite(200);
checkWebsite(500);
*/

function checkWebsite(statusCode){
    if(statusCode===200){
        return "Website Passed"
    }
    else{
        throw new Error ("Website check failed")
    }
    
}
try{
    console.log(checkWebsite(200));
    console.log(checkWebsite(500));
}catch(error){
    console.log(error.message)
}