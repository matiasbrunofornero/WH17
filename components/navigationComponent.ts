import { BasePage } from "../pages/basePage";
import { NavigationBarLocators } from "./locators/navigationComponent";
import { Page, Locator } from "@playwright/test";
import { LoginModal } from "./loginModal";

export class NavigationComponent extends BasePage {
  private readonly logInButton: any;

  constructor(page: Page) {
    super(page);
    this.logInButton = NavigationBarLocators.LogInButton;
  }

  async clickLogIn() {
    await this.clickByRole(this.logInButton.role, {
      name: this.logInButton.name,
    });
  }
}