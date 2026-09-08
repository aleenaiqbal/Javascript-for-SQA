/* Task 1 — Error Handling
Write:
function divide(a, b)
If b is 0, throw:
Cannot divide by zero
Use try...catch to handle it.
*/

function divide(a, b){
    if(b===0){
        throw new Error ("Cannot divide by zero");
    }
    return a/b;
}
try{
    console.log(divide(10,2));
    console.log(divide(10,0));
}catch(error){
    console.log(error.message);
    
}