import { $, $$, ElementFinder, browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';

export class CasesPage {
  private createCaseBox: ElementFinder;
  private officerID: ElementFinder;
  private partnerID: ElementFinder;
  private event: ElementFinder;
  private caseName: ElementFinder;
  private description: ElementFinder;
  private caseNotes: ElementFinder;
  private create: ElementFinder;
  private openCase: ElementFinder;
  private randomCaseName;

  constructor () {
    const autName = 'DCA-';
    this.createCaseBox = $$('.button-primary').get(0);
    this.officerID = $$('.k-input').get(0);
    this.partnerID = $$('.k-input').get(1);
    this.event = $$('.k-input').get(2);
    this.caseName = $('#caseName');
    this.description = $('#description');
    this.caseNotes = $('#caseNotes');
    this.create = $$('.button-secondary').get(1);
    this.openCase = $$('.case-table .case-head span').get(0);
    this.randomCaseName = autName + Math.floor(Math.random() * 10000) + 1;
  }

  private async fillOfficerID(): Promise<void> {
    await this.officerID.sendKeys('dcorredor');
    await browser.sleep(1000);
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }

  private async fillPartnerID(): Promise<void> {
    await this.partnerID.sendKeys('1111');
    await browser.sleep(1000);
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }

  private async selEvent(): Promise<void> {
    await this.event.click();
    await browser.sleep(1000);
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }

  private async fillCaseName(): Promise<void> {
    await this.caseName.sendKeys(this.randomCaseName);
  }

  private async fillDescription(): Promise<void> {
    await this.description.sendKeys(this.randomCaseName);
  }

  private async fillCaseNotes(): Promise<void> {
    await this.caseNotes.sendKeys(this.randomCaseName);
  }

  public async createCase(): Promise<void> {
    await this.createCaseBox.click();
    await browser.sleep(1000);
    await this.fillOfficerID();
    await this.fillPartnerID();
    await this.fillCaseName();
    await this.fillDescription();
    await this.selEvent();
    await this.fillCaseNotes();
    await this.create.click();
  }

  public async openTheCase(): Promise<void> {
    await this.openCase.click();
  }

  public getCaseName() {
    return this.randomCaseName;
  }
}
