angular.module("devmtnTravel").controller('bookedCtrl', function($scope, $stateParams, mainSrv) {
    $scope.booking = mainSrv.getlocation($stateParams.id)
    console.log($scope.booking);
});
