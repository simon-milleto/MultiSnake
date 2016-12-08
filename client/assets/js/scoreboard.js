import $ from 'jquery';

export default function scoreBoard(snakes) {
	snakes.forEach(function(e){
		$("#userlist").append( "<li><span class='name'>" + e.name + "</span></li>" );


		var li = $("<li>");
		$(li).append(
			$('<span>', {
			    class: 'name',
			    text: e.name
			})
		);

	});
}