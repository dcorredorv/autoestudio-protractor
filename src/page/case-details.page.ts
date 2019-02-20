import { $, ElementFinder, browser, $$ } from 'protractor';
import { protractor } from 'protractor/built/ptor';

export class CaseDetailsPage {
  private caseName: ElementFinder;
  private description: ElementFinder;
  private event: ElementFinder;
  private officerID: ElementFinder;
  private partnerID: ElementFinder;

  constructor () {
    this.caseName = $$('.line').get(1);
    this.description = $$('.line').get(3);
    this.event = $$('.line').get(5);
    this.officerID = $$('.line').get(9);
    this.partnerID = $$('.line').get(11);
  }

  public async getCaseName() {
    return this.caseName.getText();
  }

  public async getDescription() {
    return this.description.getText();
  }

  public async getEvent() {
    return this.event.getText();
  }

  public async getOfficerID() {
    return this.officerID.getText();
  }

  public async getPartner() {
    return this.partnerID.getText();
  }
}
