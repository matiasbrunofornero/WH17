import { expect, test } from "@playwright/test";
import { BookingsPage } from "../bckp/bookingsPage";
import { BasePage } from "../pages/basePage";
import { HomePage } from "../pages/homePage";
import { LoginModal } from "../components/loginModal";

test("test", async ({ page }) => {
  const basePage = new BasePage(page);
  const homePage = new HomePage(page);
  const loginModal = new LoginModal(page);

  await basePage.goToPage("https://www.demoblaze.com/index.html");
  await homePage.clickLogIn();
  await loginModal.performLogin("36616668", "36616668");
  await page.pause();
});
