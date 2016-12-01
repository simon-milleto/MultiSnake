"use strict";

export default {
 	sendNewUser(socket){
		socket.on('client ID', function(id){
			console.log("Nouvel utilisateur : " + id);
		});
	},
	sendDeleteUser(socket, event){
		socket.on('disconnect message', function(){
			console.log("Un utilisateur est parti");
		});
	},
	sendMove(socket, event){
		socket.emit('movement', event);
	}
}
