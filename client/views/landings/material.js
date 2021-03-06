/*var app = angular.module('StarterApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

}]);*/





/*angular
  .module('inputIconDemo', ['ngMaterial', 'ngMessages'])
  .controller('DemoCtrl', function($scope) {
    $scope.user = {
      name: '',
      email: '',
      phone: '',
      address: ''
    };
  });*/

angular
  .module('inputIconDemo', ['ngMaterial', 'ngMessages'])
  .controller('DemoCtrl', ['$scope', function($scope) {
    $scope.user = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }]);






var themeIcons = ['$mdIconProvider' , function ($mdIconProvider) {

  $mdIconProvider
    .iconSet("social", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-social.svg")
    .iconSet("action", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-action.svg")
    .iconSet("communication", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-communication.svg")
    .iconSet("content", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content.svg")
    .iconSet("toggle", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-toggle.svg")
    .iconSet("navigation", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-navigation.svg")
    .iconSet("image", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-image.svg");

}];

angular.module('inputIconDemo')
  .config(themeIcons);

Template.createCase.events({
  'submit form': function(e) {
    e.preventDefault();

    var scope = angular.element(document.getElementById("MainWrap")).scope();

    var aCase = {
      //number: number.replace(/"/g,""),
      name: scope.user.name,
      phone: scope.user.phone,
      email: scope.user.email,
      message: scope.user.message
    }


    console.log(aCase.name);
    console.log(aCase.phone);
    console.log(aCase.email);
    console.log(aCase.message);


    alert(aCase.name+' '+aCase.phone+' '+aCase.email+' '+aCase.message);


  }
});