import { BasePage } from "../pages/basePage";
import { LoginModalLocators } from "../components/locators/loginModal";
import { Page, Locator } from "@playwright/test";

export class LoginModal extends BasePage {
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly closeButton: any;
  private readonly logInButton: any;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator(LoginModalLocators.UsernameInput);
    this.passwordInput = page.locator(LoginModalLocators.PasswordInput);
    this.closeButton = LoginModalLocators.CloseButton;
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
    return await this.clickByRole(this.closeButton.role, {
      name: this.closeButton.name,
    });
  }
}
