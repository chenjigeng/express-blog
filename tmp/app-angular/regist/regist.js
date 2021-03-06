(function(){
  var RegistCtrl, registCtrl;
  RegistCtrl = function($scope, $mdDialog, $mdMedia){
    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
    $scope.showRegist = function(ev){
      $mdDialog.show({
        controller: registCtrl,
        templateUrl: "regist/regist.html",
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: $scope.customFullscreen
      });
    };
  };
  registCtrl = function($scope, $mdDialog, $http, $rootScope){
    $scope.submit = function(){
      var user;
      user = {
        name: $scope.name,
        password: $scope.password,
        email: $scope.email
      };
      console.log("user", user);
      $http.post("./users/regist", user).then(function(data){
        console.log(data);
        if (data.data === "该邮箱已被注册") {
          $scope.error = "该邮箱已被注册";
          return;
        }
        console.log("successfully");
        $rootScope.login = true;
        $rootScope.user = data.data;
        $mdDialog.hide();
      }, function(){
        console.log("fail");
      });
    };
  };
  angular.module("app").controller("RegistCtrl", RegistCtrl);
}).call(this);
