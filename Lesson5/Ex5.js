/* Exercise 5 — Playwright Thinking
Without actually opening a browser, write the correct order for this test:
Open website
Fill email
Fill password
Click login
Check dashboard
Write it using:
async function loginTest() {
    
    // your steps here

}
You don't need to make the Playwright code work yet. The goal is to practice understanding where await belongs.
*/


async function loginTest(){
    await page.goto("https://www.google.com/");
    await page.locator("email").fill("test@gmail.com");
    await page.locator("password").fill("123456789");
    await page.locator("login").click();
    await page.locator("dashboard").isVisible();
}