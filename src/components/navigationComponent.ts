import { BasePage } from "../pages/basePage";
import { NavigationBarLocators } from "./locators/navigationComponent";
import { Page, Locator } from "@playwright/test";

export class NavigationComponent extends BasePage {
  private readonly loginButton: any;
  public readonly welcomeMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.loginButton = NavigationBarLocators.LogInButton;
    this.welcomeMessage = page.locator(NavigationBarLocators.WelcomeMessage);
  }

  async clickLogIn() {
    return await this.clickByRole(this.loginButton.role, {
      name: this.loginButton.name,
    });
  }
}
