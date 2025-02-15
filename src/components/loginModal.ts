import { BasePage } from "../pages/basePage";
import { LoginModalLocators } from "../components/locators/loginModal";
import { Page, Locator, expect } from "@playwright/test";

export class LoginModal extends BasePage {
  public readonly loginModal: Locator;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly closeButton: Locator;
  private readonly logInButton: any;

  constructor(page: Page) {
    super(page);
    this.loginModal = page.locator(LoginModalLocators.LoginModal);
    this.usernameInput = page.locator(LoginModalLocators.UsernameInput);
    this.passwordInput = page.locator(LoginModalLocators.PasswordInput);
    this.closeButton = page.locator(LoginModalLocators.CloseButton);
    this.logInButton = LoginModalLocators.LogInButton;
  }

  async performLogin(username: string, password: string) {
    await this.fillBySelector(this.usernameInput, username);
    await this.fillBySelector(this.passwordInput, password);
    return await this.clickByRole(this.logInButton.role, {
      name: this.logInButton.name,
    });
  }

  async closeModal() {
    await this.clickBySelector(this.closeButton);
  }
}