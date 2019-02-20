import * as path from 'path';
import { Config, browser } from 'protractor';
import { Reporter } from './helpers/reporter';
const jsonReportPath = '/reports/json';
const jsonReports = process.cwd() + jsonReportPath;

export const config: Config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    '../../tests/features/*.feature',
  ],
  capabilities: {
    browserName: 'chrome',
  },
  baseUrl: 'https://qaregression01.usgovvirginia.cloudapp.usgovcloudapi.net:803',
  getPageTimeout: 1000,
  SELENIUM_PROMISE_MANAGER:  false,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(0),
    Reporter.createDirectory(jsonReports);
  },
  cucumberOpts: {
    format: 'json:./reports/json/cucumber_report.json',
    require: ['../../dist/tests/step_definitions/*.js', '../../dist/protractor/helpers/*.js'],
    strict: true,
    tags: '@cases',
  },
  onComplete: () => {
    Reporter.createHTMLReport();
  },
};
