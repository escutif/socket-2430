var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//ON son para escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conección con el servidor');
});

//Emit para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Fabian',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta Server:', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});