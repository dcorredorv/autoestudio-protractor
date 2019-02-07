import { Config, browser } from 'protractor';
import { Reporter } from './helpers/reporter';
const jsonReportPath = '/reports/json';
const jsonReports = process.cwd() + jsonReportPath;

export const config: Config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    '../../features/*.feature',
  ],
  baseUrl: 'https://www.google.com',
  getPageTimeout: 1000,
  SELENIUM_PROMISE_MANAGER:  false,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    Reporter.createDirectory(jsonReports);
  },
  cucumberOpts: {
    format: 'json:./reports/json/cucumber_report.json',
    require: ['../../dist/stepdefinitions/*.js', '../../dist/protractor/helpers/reports/*.js'],
    strict: true,
    tags: '@CucumberScenario or @ProtractorScenario or @TypeScriptScenario or @OutlineScenario',
  },
  onComplete: () => {
    Reporter.createHTMLReport();
  },
};
