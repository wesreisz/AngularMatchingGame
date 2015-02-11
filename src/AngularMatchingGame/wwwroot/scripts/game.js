function Game(title) {
	var _TILENAMES = ['8-ball', 'baked-potato', 'dinosaur', 'kronos', 'rocket', 'that-guy', 'zeppelin', 'cards'];
	this.title = title;
	this.tileDeck = makeDeck(_TILENAMES).shuffle();

	function makeDeck(tileNames) {
		var tiles = [];
		tileNames.forEach(function (tile) {
			tiles.push(new Tile(tile));
			tiles.push(new Tile(tile));
		});
		return tiles;
	};
}
function Tile(title) {
	this.tileTitle = title;
	this.flipped = false;
	this.flip = function () {
		this.flipped = !this.flipped;
	}
}