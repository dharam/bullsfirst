'use strict';

describe('Controller: AccountsController', function () {

  // load the controller's module
  beforeEach(module('bullsfirstApp'));

  var AccountsController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccountsController = $controller('AccountsController', {
      $scope: scope,
      getAccounts : [{
                    name: 'Brokerage Account 3',
                    marketValue: 1999990,
                    cash: 1995826,
                    legend: 'orange'
                },
                {
                    name: 'Account 3',
                    marketValue: 1949990,
                    cash: 1695856,
                    legend: 'darkorange'
                },
                {
                    name: 'Brokerage Account 1',
                    marketValue: 1349990,
                    cash: 1595866,
                    legend: 'red'
                }]      
    });
  }));

  it('should have a list of accounts to the scope', function () {
    expect(AccountsController.rows.length).toBe(3); 
  });
});
