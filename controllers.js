todoApp.controller('todoController', ['$scope', function($scope){

  $scope.newTask = '';

  $scope.taskList = [
    { description: 'Walk the turtle', done: false},
    { description: 'Buy milk', done: false},
    { description: 'Post letter', done: false},
  ];

  $scope.addTask = function() {
    $scope.taskList.push({ description: $scope.newTask, done: false });
    $scope.newTask = '';
  }

}]);
