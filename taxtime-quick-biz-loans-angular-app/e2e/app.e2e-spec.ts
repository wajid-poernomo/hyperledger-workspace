import { AngularTestPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Starting tests for taxtime-quick-biz-loans-angular-app', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be taxtime-quick-biz-loans-angular-app', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('taxtime-quick-biz-loans-angular-app');
    })
  });

  it('navbar-brand should be taxtime-quick-biz-loans@1.0.0',() => {
    var navbarBrand = element(by.css('.navbar-brand')).getWebElement();
    expect(navbarBrand.getText()).toBe('taxtime-quick-biz-loans@1.0.0');
  });

  
    it('ChartOfAccounts component should be loadable',() => {
      page.navigateTo('/ChartOfAccounts');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('ChartOfAccounts');
    });

    it('ChartOfAccounts table should have 10 columns',() => {
      page.navigateTo('/ChartOfAccounts');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(10); // Addition of 1 for 'Action' column
      });
    });

  
    it('Offer component should be loadable',() => {
      page.navigateTo('/Offer');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Offer');
    });

    it('Offer table should have 6 columns',() => {
      page.navigateTo('/Offer');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(6); // Addition of 1 for 'Action' column
      });
    });

  
    it('User component should be loadable',() => {
      page.navigateTo('/User');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('User');
    });

    it('User table should have 4 columns',() => {
      page.navigateTo('/User');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });

  
    it('TaxAccountant component should be loadable',() => {
      page.navigateTo('/TaxAccountant');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('TaxAccountant');
    });

    it('TaxAccountant table should have 5 columns',() => {
      page.navigateTo('/TaxAccountant');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });

  
    it('Bank component should be loadable',() => {
      page.navigateTo('/Bank');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Bank');
    });

    it('Bank table should have 3 columns',() => {
      page.navigateTo('/Bank');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });

  

});
