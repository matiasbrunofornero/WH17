import { expect, test } from "@playwright/test";
import { config } from "dotenv"; 
import { BasePage } from "../pages/basePage";
import { HomePage } from "../pages/homePage";
import { LoginModal } from "../components/loginModal";

config();

test("Login modal is displayed after clicking in Login button in the navigation bar", async ({ page }) => {
  const basePage = new BasePage(page);
  const homePage = new HomePage(page);
  const loginModal = new LoginModal(page);

  await basePage.goToPage("https://www.demoblaze.com/index.html");
  await homePage.clickLogIn();
  await expect(loginModal.loginModal).toHaveClass("modal fade show");
});

test("Login modal is not displayed after closing it with Close Button", async ({ page }) => {
  const basePage = new BasePage(page);
  const homePage = new HomePage(page);
  const loginModal = new LoginModal(page);

  await basePage.goToPage("https://www.demoblaze.com/index.html");
  await homePage.clickLogIn();
  await loginModal.closeModal();
  await expect(loginModal.loginModal).not.toHaveClass("show");
});

test("User logged with valid credentials is able to see the Welcome message", async ({ page }) => {
  const username = process.env.USERNAME ?? '';
  const password = process.env.PASSWORD ?? '';
  
  const basePage = new BasePage(page);
  const homePage = new HomePage(page);
  const loginModal = new LoginModal(page);

  await basePage.goToPage("https://www.demoblaze.com/index.html");
  await homePage.clickLogIn();
  await loginModal.closeModal();
  await homePage.clickLogIn();
  await loginModal.performLogin(username, password);
  await expect(homePage.welcomeMessage).toHaveText(`Welcome ${username}`);
});