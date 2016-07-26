var myApp=angular.module("myApp",[]);
​
myApp.controller("mainCtrl", function($scope,$http)
{
  $scope.term="";
  $scope.people=[];
  $scope.customList=[];
  $scope.getSearchResults=function()
  {
    $http.get("http://localhost:3000/people").success(function(data)
  {
    // alert(data[0].name);
    // alert($scope.term);
​
    //var data=JSON.stringify(result);
​
    for(var i=0;i<=data.length;i=i+1)
    {
      if(data[i].name===$scope.term)
      {
        $scope.people.push(data[i]);
      }
      else if(+data[i].aId===+$scope.term)
      {
        $scope.people.push(data[i]);
      }
      else if(data[i].workPlace===$scope.term)
      {
        $scope.people.push(data[i]);
      }
      else if(+data[i].exp===+$scope.term)
      {
        $scope.people.push(data[i]);
      }
     }
     console.log($scope.people);
  });
  }
});
