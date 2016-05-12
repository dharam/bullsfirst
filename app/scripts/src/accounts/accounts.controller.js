(function () {
    'use strict';

    angular
        .module('bullsfirstApp')
        .controller('AccountsController', AccountsController);
    
    function AccountsController($scope, getAccounts){
        var acc = this;
        var totalMarketValue = 0;
        var totalCash = 0;

        acc.rows = getAccounts.get();    
        console.log(acc.rows);
        acc.totals = {
            name: '',
            marketValue: 0,
            cash: 0,
            legend: 'none'
        };

        acc.rows.forEach(function (account) {
            acc.totals.marketValue  += account.marketValue;
            acc.totals.cash         += account.cash;
        });

        acc.addAccount = function() {
            acc.rows.push({
                name: 'New Account',
                marketValue: Math.random() * 100000,
                cash: Math.random() * 400000,
                legend: 'cyan'
            });
        };
    };
}());