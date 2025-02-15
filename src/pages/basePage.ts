import { expect, Locator } from "@playwright/test";
import { Page } from "playwright";

export class BasePage {
  protected readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async goToPage(url: string) {
    await this.page.goto(url);
  }

  async clickByRole(role: any, obj: object) {
    await this.page.getByRole(role, obj).click();
  }

  async clickBySelector(selector: Locator) {
    await selector.click();
  }

  async fillByRole(role: any, obj: object, value: string) {
    await this.page.getByRole(role, obj).fill(value);
  }

  async fillBySelector(selector: Locator, value: string) {
    await selector.fill(value);
  }

  async selectOption(selector: string, value: string) {
    await this.page.selectOption(selector, value);
  }
}
