// open websocket
const socket = new WebSocket("https://server.com/websocket", "protocolOne");

// when done, send move
var xhr = new XMLHttpRequest();
xhr.open("POST", `/game/${gameid}/`, true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    value: value
}));