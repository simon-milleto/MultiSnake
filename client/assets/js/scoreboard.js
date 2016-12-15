import $ from 'jquery';

export default class Scoreboard {

	addPlayer(snake) {
		$("#userlist").append(this.createPlayer(snake));
	}

	createPlayer(snake) {
		var li = $('<li>');
		li.css('color', snake.color);
		li.data('name', snake.name);
		li.append(
			$('<span>', {
				class: 'name',
				text: snake.name
			}),
			$('<span>', {
				class: 'score',
				text: snake.score
			})
		);

		return li;
	}

	updateScores(snakes) {
		snakes.forEach((snake) => {
			$.each($('#userlist li'), (i, player) => {
				if ($(player).data('name') === snake.name) {
					$('span.score').text(snake.score);
				}
			});
		});
	}

	removePlayer(snake) {
		$.each($('#userlist li'), (i, player) => {
			if ($(player).data('name') === snake.name) {
				player.remove();
			}
		});
	}

}