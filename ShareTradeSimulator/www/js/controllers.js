angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  // Form data for the login modal
  $scope.loginData = {};

  $scope.stocks = [
    {
      name: 'SUN (Suncorp Group Limited)',
      visible: true,
      img: 'img/sun-chart2.PNG'
    }, 
    {
      name: 'BHP (BHP Billiton Limited)',
      visible: false,
      img: 'img/stock-BHP.png'
    }, 
    {
      name: 'CBA (Commonwealth Bank of Australia)',
      visible: false,
      img: 'img/stock-CBA.png'
    }, 
    {
      name: 'NHC (New Hope Corporation Limited)',
      visible: false,
      img: 'img/stock-NHC.png'
    }, 
    {
      name: 'QAN (Qantas Airways Limited)',
      visible: false,
      img: 'img/stock-QAN.png'
    }, 
    {
      name: 'RIO (Rio Tinto Limited)',
      visible: false,
      img: 'img/stock-RIO.png'
    }, 
    {
      name: 'VAH (Virgin Australia Holdings Ltd)',
      visible: false,
      img: 'img/stock-VAN.png'
    }
  ];

  $scope.clickStock = function(stock) {
      for (var i = 0; i < $scope.stocks.length; i++) {
        $scope.stocks[i].visible = false;
      }

      stock.visible = true;
  };

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

})

.controller('HomeCtrl', function($scope) {

  //$scope.playlists = [
  //  { title: 'Reggaeeeeee', id: 1 },
  //  { title: 'Chill', id: 2 },
  //  { title: 'Dubstep', id: 3 },
  //  { title: 'Indie', id: 4 },
  //  { title: 'Rap', id: 5 },
  //  { title: 'Cowbell', id: 6 }
  //];
})

.controller('HomeCtrl', function($scope, $stateParams) {
});
