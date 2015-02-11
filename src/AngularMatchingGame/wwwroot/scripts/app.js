(function () {
	var app = angular.module('app', []);
	app.controller('GameController', function ($scope) {
		$scope.game = new Game("My Matching Game");
	});
})();