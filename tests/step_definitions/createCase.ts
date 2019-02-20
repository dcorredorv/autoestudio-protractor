import { $, browser } from 'protractor';
import { LoginPage, LocationPage, AdminPage, OfficerDashboardPage,
  CasesPage, CaseDetailsPage} from '../../src/page';
const { Given, When, Then } = require('cucumber');
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

const loginPage: LoginPage = new LoginPage();
const locationPage: LocationPage = new LocationPage();
const adminPage : AdminPage = new AdminPage();
const officerDashboardPage : OfficerDashboardPage = new OfficerDashboardPage();
const casesPage : CasesPage = new CasesPage();
const caseDetailsPage : CaseDetailsPage = new CaseDetailsPage();

Given(/^I selected a location$/, async () => {
  await locationPage.selectLocation();
});

When(/^I type '(.*?)' as username$/, async (user) => {
 // await browser.sleep(3000);
  await loginPage.fillUsername(user);
});

When(/^I type '(.*?)' as password$/, async (pass) => {
  await browser.sleep(1000);
  await loginPage.fillPassword(pass);
});

When(/^I click the Sign In button$/, async () => {
  await browser.sleep(3000);
  await loginPage.signIn();
});

When(/^I click on '(.*?)'$/, { timeout : 2 * 5000 }, async (dashboard) => {
  await browser.sleep(7000);
  switch (dashboard){
    case 'officer-dashboard': await adminPage.getOfficerDashboard(); break;
    case 'cases-dashboard': await officerDashboardPage.goCasesDashboard(); break;
  }
});

When(/^I create a new case$/, { timeout : 2 * 5000 }, async () => {
  await browser.sleep(1000);
  await casesPage.createCase();
});

When(/^I open the new case$/, { timeout : 2 * 5000 }, async () => {
  await browser.sleep(2000);
  await casesPage.openTheCase();
});

Then(/^the case name was saved susccesfully$/, async () => {
  await browser.sleep(2000);
  await expect(caseDetailsPage.getCaseName()).to.eventually.equal(casesPage.getCaseName());
});

Then(/^the description was saved susccesfully$/, async () => {
  await expect(caseDetailsPage.getDescription()).to.eventually.equal(casesPage.getCaseName());
});

Then(/^the event was saved susccesfully$/, async () => {
  await expect(caseDetailsPage.getEvent()).to.eventually.equal('Default Event');
});

Then(/^the officer was assigned correctly$/, async () => {
  await expect(caseDetailsPage.getOfficerID()).to.eventually.equal('Diego Corredor');
});

Then(/^the parter was assigned susccesfully$/, async () => {
  await expect(caseDetailsPage.getPartner()).to.eventually.equal('Officer, 1111');
});
