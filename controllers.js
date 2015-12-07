todoApp.controller('todoController', ['$scope', '$filter', function($scope, $filter){

  $scope.newTask = '';
  $scope.pendingCount = 3;

  $scope.taskList = [
    { description: 'Walk the turtle', done: false},
    { description: 'Buy milk', done: false},
    { description: 'Post letter', done: false},
  ];

  $scope.addTask = function() {
    $scope.taskList.push({ description: $scope.newTask, done: false });
    $scope.newTask = '';
  }

  $scope.deleteTask = function(index){
    $scope.taskList.splice(index, 1);
  }

  $scope.$watch('taskList', function(){
    $scope.pendingCount = $filter('filter')($scope.taskList, { done: false }).length;
  }, true)

}]);
