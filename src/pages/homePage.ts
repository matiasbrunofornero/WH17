import { NavigationComponent } from "../components/navigationComponent";
import { Page } from "@playwright/test";

export class HomePage extends NavigationComponent {
  constructor(page: Page) {
    super(page);
  }
}