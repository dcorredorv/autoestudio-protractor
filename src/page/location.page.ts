import { $, ElementFinder, browser } from 'protractor';

export class LocationPage {
  private locationDropdown: ElementFinder;
  private continueButton: ElementFinder;

  constructor () {
    this.locationDropdown = $('.k-select');
    this.continueButton = $('[type=submit]');
  }

  public async selectLocation(): Promise<void> {
    await browser.sleep(3000);
    await this.continueButton.click();
  }
}
