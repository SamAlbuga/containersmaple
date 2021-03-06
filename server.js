'use strict';

const Hapi=require('hapi');

// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port:  2222
});

// Add the route
server.route({
    method:'GET',
    path:'/',
    handler:function(request,h) {

        return'hello world';
    }
});
// throw new Error('fake error');
server.route({
    method:'GET',
    path:'/error',
    handler:function(request,h) {
        process.exit(1);
        return;
    }
});

// Start the server
async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server listening on:', server.info.uri);
};

start();