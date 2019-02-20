import { $, ElementFinder } from 'protractor';

export class AdminPage {
  private officerDashboardBox: ElementFinder;

  constructor () {
    this.officerDashboardBox = $('.ad-pn-32 a span');
  }

  public async getOfficerDashboard(): Promise<void> {
    await this.officerDashboardBox.click();
  }
}
