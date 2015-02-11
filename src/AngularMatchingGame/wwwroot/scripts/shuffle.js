﻿//this method adds a shuffle routine to the javascript array
Array.prototype.shuffle = function () {
	var input = this;
	var cnt = 1;
	for (var i = input.length - 1; i >= 0; i--) {

		var randomIndex = Math.floor(Math.random(cnt++) * (i + 1));
		var itemAtIndex = input[randomIndex];

		input[randomIndex] = input[i];
		input[i] = itemAtIndex;
	}
	return input;
}