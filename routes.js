todoApp.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'views/todo.html',
    controller: 'todoController'
  })

});

