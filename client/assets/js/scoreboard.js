import $ from 'jquery';

export default class Scoreboard {

	constructor() {
		this.players = new WeakMap;
		this.userContainer = $('#userlist');
	}

	addPlayer(player) {
		let playerContainer = this.createPlayer(player);
		this.players.set(player, playerContainer);

		this.userContainer.append(playerContainer);
	}

	createPlayer(player) {
		var li = $('<li>');
		li.css('color', player.color);
		li.data('name', player.name);
		li.append(
			$('<span>', {
				class: 'name',
				text: player.name
			}),
			$('<span>', {
				class: 'score',
				text: player.score
			})
		);

		return li;
	}

	updateScores(players) {
		players.forEach((player) => {
			this.players.get(player).find('span.score').text(player.score);
		});
	}

	removePlayer(player) {
		this.players.get(player).remove();
		this.players.delete(player);
	}

}