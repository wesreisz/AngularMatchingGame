(function () {
	var app = angular.module("app", ['ngRoute', 'ngAnimate']);
	app.config(function ($routeProvider) {
		$routeProvider
			 .when('/', {
			 	templateUrl: 'templates/home.html'
			 })
			 .when('/play', {
			 	templateUrl: 'templates/game.html',
			 	controller: 'GameController'
			 })
			 .when('/about', {
			 	templateUrl: 'templates/about.html'
			 })
			 .otherwise({
			 	redirectTo: '/'
			 })
	});

	app.controller('GameController', function ($scope) {
		$scope.game = new Game("My Matching Game");
	});
})();