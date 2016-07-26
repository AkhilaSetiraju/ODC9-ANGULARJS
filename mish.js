var app1=angular.module("app1",[]);
app1.controller("UserForm",function($scope,$http){
  $scope.content=[];
  $http.get("http://localhost:3000/profiles/1")
  .then(function(response) {
      $scope.content = response.data;
  }, function(response) {
      $scope.content = "Something went wrong";
  });
  console.log($scope.content);
  });
