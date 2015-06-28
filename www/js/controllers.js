angular
  .module('jungheinrich.controllers', [])
  .config(function($ionicConfigProvider) {

  })
  .controller('DashCtrl', function($scope) { })

.controller('ManualDetailCtrl', function($scope, $ionicConfig) {

  $ionicConfig.backButton.text('');

  videojs.options.flash.swf = 'http://static.playbackurl.com/player/video-js.swf';
  videojs.options.techOrder = [ 'hls', 'html5' ];

  var video = videojs('video-js', {}, function()
    {
      this.currentTime(2);
    });

  $scope.goto = function(seconds) {
    video.currentTime(seconds);
    video.play();
  }

  $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
   video.pause();
});

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    push: true,
    extend: true
  };
})

.controller('TabsCtrl', function($scope, $ionicHistory) {

  $scope.clearHistory = function() {
      $ionicHistory.clearHistory();
   }
})

.controller('ManualsCtrl', function($scope, $ionicConfig) {
  $scope.items = [{
    id: 0,
    name: 'Hand palletwagens',
    lastText: 'Draagvermogen 500 tot 3000 kg',
    face: 'img/secties/handpalletwagens.jpg'
  }, {
    id: 3,
    name: 'Elektrische palletwagens',
    lastText: 'Draagvermogen 1400 tot 3300 kg',
    face: 'img/secties/elektrischepalletwagens.jpg'
  }, {
    id: 4,
    name: 'Stapelaars',
    lastText: 'Draagvermogen 600 tot 1000 kg',
    face: 'img/secties/stapelaar.jpg'
  }, {
    id: 4,
    name: 'Elektrische heftrucks',
    lastText: 'Draagvermogen 1000 tot 5000 kg',
    face: 'img/secties/elektrischeheftruck.jpg'
  }, {
    id: 4,
    name: 'Reachtrucks',
    lastText: 'Draagvermogen 1000 tot 2500 kg',
    face: 'img/secties/reachtruck.jpg'
  }];

  $ionicConfig.backButton.text('');

})

.controller('CategoriesCtrl', function($scope, $ionicConfig) {
  $scope.items = [{
    id: 0,
    name: 'Elektrische heftruck 1 serie',
    lastText: 'Draagvermogen 500 tot 3000 kg',
    face: 'img/categorieen/1serie.jpg'
  }, {
    id: 3,
    name: 'Elektrische heftruck 2 serie',
    lastText: 'Draagvermogen 1400 tot 3300 kg',
    face: 'img/categorieen/2serie.jpg'
  }, {
    id: 4,
    name: 'Elektrische heftruck 3 serie',
    lastText: 'Draagvermogen 600 tot 1000 kg',
    face: 'img/categorieen/3serie.jpg'
  }, {
    id: 4,
    name: 'Elektrische heftruck 4 serie',
    lastText: 'Draagvermogen 1000 tot 5000 kg',
    face: 'img/categorieen/4serie.jpg'
  }, {
    id: 4,
    name: 'Elektrische heftruck 5 serie',
    lastText: 'Draagvermogen 1000 tot 2500 kg',
    face: 'img/categorieen/5serie.jpg'
  }];
  $ionicConfig.backButton.text('Terug');
})


;
