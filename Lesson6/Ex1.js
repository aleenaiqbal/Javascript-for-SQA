/* Task 1 — Create a function
Create:
function checkSignup(status)
If status is "Passed" return:
Signup Passed
Otherwise:
Signup Failed
Export it.
*/

function checkSignup(status){
    if(status==="Passed"){
        return "Signup Passed";
    }
    else{
        return "Signup Failed";
    }
}

export {checkSignup};