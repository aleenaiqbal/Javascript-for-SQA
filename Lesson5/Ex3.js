/*Exercise 3 — Try/Catch
Create an async function:
checkWebsite()
Inside try:
print "Website checking..."
Then deliberately create an error.
Use catch to print:
Website check failed
*/

async function checkWebsite(){
    try{
        console.log("Website checking...");
        throw new Error("Website not responding");
    }catch(error){
        console.log("Website check failed");
    }
}

checkWebsite();