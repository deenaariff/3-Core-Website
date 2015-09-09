var Controllers = angular.module('Controllers',[])

Controllers.controller('iconCtrl', function($scope) {

    $scope.images = [
        {name: 'marketingsolutions'},
        {name: 'productbranding'},
        {name: 'onlineadvertising'},
        {name: 'digitalstrategy'},
    ];

});

