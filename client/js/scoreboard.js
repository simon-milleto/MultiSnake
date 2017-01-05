import $ from 'jquery';

export default class Scoreboard {

	constructor() {
		this.playersToLi = new WeakMap;
		this.playersContainer = $('<ul>', {id: 'player-list'});
	}

	addPlayer(player) {
		let playerContainer = this.createPlayer(player);
		this.playersToLi.set(player, playerContainer);

		this.playersContainer.append(playerContainer);
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

	updateScores(players, clientLocalSnake) {
		players.forEach((player) => {
			this.playersToLi.get(player).find('span.score').text(player.score);
			if(player === clientLocalSnake){
				this.playersToLi.get(player).addClass('current');
			}
		});
	}

	removePlayer(player) {
		this.playersToLi.get(player).remove();
		this.playersToLi.delete(player);
	}

}
