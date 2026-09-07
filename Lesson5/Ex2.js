/* Exercise 2 — Promise
Create a function called:
waitOneSecond()
It should return a Promise that resolves after 1 second.
Then use:
await waitOneSecond();
inside an async function.
Expected:
Test started
[1 second]
Test finished
*/

async function waitOneSecond(){
    return new Promise(resolve => {
        setTimeout(resolve, 1000)
    })
}

async function test(){
    console.log("Test started");

    await waitOneSecond();

    console.log("Test Finished");

}

test();