import $ from 'jquery';

export default function scoreBoard(snakes) {
	snakes.forEach(function(e){
		var li = $("<li>").append(
			$('<span>', {
			    class: 'name',
			    text: e.name
			})
		);
		$("#userlist").append(li);
	});
}