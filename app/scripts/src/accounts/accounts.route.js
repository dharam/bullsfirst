(function() {

	'use strict';

/**
 * @ngdoc overview
 * @name bullsfirstApp
 * @description
 * # bullsfirstApp
 *
 * Main module of the application.
 */
angular
  .module('bullsfirstApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/src/accounts/accounts.html',
        controller: 'AccountsController',
        controllerAs: 'accounts'
      })      
      .otherwise({
        redirectTo: '/'
      });
  }); 
}());