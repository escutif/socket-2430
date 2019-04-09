const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        //Enviar el mansaje a todos los clientes
        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({ resp: 'TODO SALIO BIEN' });
        // } else {
        //     callback({ resp: 'NO LLEGO EL MENSAJE' });
        // }

    });


});