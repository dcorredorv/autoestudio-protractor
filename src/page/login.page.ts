import { $, ElementFinder } from 'protractor';

export class LoginPage {
  private username: ElementFinder;
  private password: ElementFinder;
  private signInButton: ElementFinder;

  constructor () {
    this.username = $('[type=text]');
    this.password = $('[type=password]');
    this.signInButton = $('[type=submit]');
  }

  public async fillUsername(user): Promise<void> {
    await this.username.sendKeys(user);
  }

  public async fillPassword(pass): Promise<void> {
    await this.password.sendKeys(pass);
  }

  public async signIn(): Promise<void> {
    await this.signInButton.click();
  }
}
