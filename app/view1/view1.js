'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}]);

app.controller('View1Ctrl', ['$scope', 'mainSwitch', function($scope, mainSwitch) {
  /** set unicode to buttons label */
  $('#sqrt').text('( ) '+'\u221A'+' ( )');
  $('#pi').text('( ) '+'π');
  $('#pow').text('( ) ^ ( )');

  $scope.val1 = '8/1*2/7/3';
  $scope.operator = '*';
  $scope.val2 = '1';

  /** get id of focused input */
  $scope.setId = function(id) {
    $scope.cur_id = id;
  };

  $scope.count = function() {
    $scope.result = mainSwitch.count($scope.val1, $scope.val2, $scope.operator);
  };

  $scope.test = function () {
    var value = ($scope.val1);
    console.log(mainSwitch.jakie(value));
  };

  /** insert sqrt or pow */
  $scope.insertUnicode = function (string) {
    var $txt = $('#'+$scope.cur_id);
    var caretPos = $txt[0].selectionStart;
    var textAreaTxt = $txt.val();
    var txtToAdd = string;
    $txt.val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos));

    $scope.val1 = $('#val1').val();
    $scope.val2 =  $('#val2').val();
  }
}]);