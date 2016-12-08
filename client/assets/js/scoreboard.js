import $ from 'jquery';

export default function scoreBoard(snakes) {
	snakes.forEach(function(e){
		var li = $("<li>");
		li.css( "color", e.color)
		li.append(
			$('<span>', {
			    class: 'name',
			    text: e.name
			}),
			$('<span>', {
			    class: 'score',
			    text: e.score
			})
		);
		$("#userlist").append(li);
	});
}