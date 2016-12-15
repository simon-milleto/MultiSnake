# API

## Socket events

### Client

Client-side API sends socket events to the server.

sendToServer.js handles events dispatching.

The serverObject provides methods to use :

- `serverObject.sendNewUser()` returns a client ID (String)
- `serverObject.sendDeleteUser()` returns a string telling that a client has disconnected.
- `serverObject.sendMove(event)` returns movement events. Takes an event parameter corresponding to the executed movement.

### Server

Server-side API sends socket events to the client.

- `connection` event broadcasts :
	- `connect message` : The connection event
	- `client ID` : The new user ID (String).

- `movement` event broadcasts movement events.
- `disconnect` event broadcasts client disconnection.