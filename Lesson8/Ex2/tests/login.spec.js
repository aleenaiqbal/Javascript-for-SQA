import { LoginPage } from "../pages/LoginPage";
test ("Login test", async({page})=>{
    const loginPage  = new LoginPage(page);
    await page.goto("https://example.com/login");
    await loginPage.login(
        "test@example.com",
        "Password123");

    const dashboard =
        await loginPage.isDashboardVisible();

    expect(dashboard).toBe(true);
});