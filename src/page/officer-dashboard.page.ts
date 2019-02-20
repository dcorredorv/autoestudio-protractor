import { $, ElementFinder } from 'protractor';

export class OfficerDashboardPage {
  private casesBox: ElementFinder;

  constructor () {
    this.casesBox = $('.inline-con h1');
  }

  public async goCasesDashboard(): Promise<void> {
    await this.casesBox.click();
  }
}
