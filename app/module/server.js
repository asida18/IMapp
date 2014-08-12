var io = require('socket.io').listen(10000);

    console.log('server started');

    io.sockets.on(
      'connection', 
      function(socket) {
        console.log('connection detected');
        socket.on(
            'message', 
            function(data){
                console.log(data);
                io.sockets.emit('message', data);
           } 
        );
        socket.on(
            'bgChange',
            function(data){
                console.log(data);
                io.sockets.emit('bgChange',data);
           }
        );
        socket.on(
            'url',
            function(data){
                console.log(data);
                io.sockets.emit('url',data);
           }
        );
    }
); 