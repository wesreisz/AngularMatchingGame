(function () {
	var app = angular.module('app', []);
	app.controller('GameController', function () {
		var myApp = this;
		myApp.title = "This is my Angular Title";
		myApp.tileNames = ['8-ball', 'baked-potato', 'dinosaur', 'kronos', 'rocket', 'that-guy', 'zeppelin', 'cards'];
	});
})();