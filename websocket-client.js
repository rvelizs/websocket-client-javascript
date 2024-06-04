// websocket-client.js
document.addEventListener('DOMContentLoaded', function() {
    var ws = new WebSocket('wss://websocket-py.glitch.me/');
    var messagesContainer = document.getElementById('messages-container');
    var messageInput = document.getElementById('message-input');
    var sendButton = document.getElementById('send-button');

    ws.onopen = function() {
        console.log('Conexión establecida');
    };

    ws.onmessage = function(event) {
        var message = document.createElement('div');
        message.textContent = event.data;
        message.classList.add('message');
        message.classList.add('received'); // Asigna la clase .received a los mensajes recibidos
        messagesContainer.appendChild(message);
    };

    ws.onclose = function() {
        console.log('Conexión cerrada');
    };

    sendButton.onclick = function() {
        if (messageInput.value) {
            var message = document.createElement('div');
            message.textContent = messageInput.value;
            message.classList.add('message');
            message.classList.add('sent'); // Asigna la clase .sent a los mensajes enviados (para diferenciarlos de los recibidos
            messagesContainer.appendChild(message);

            ws.send(messageInput.value);
            messageInput.value = '';
        }
    };
});
