import express from 'express';
import { SERVER_PORT } from '../global/environment';

import socketIO from 'socket.io';
import http from "http";

import * as socket from '../sockets/sockets';

export default class Server {

    private static _instance: Server;

    public app: express.Application;
    public port: number;

    public io: SocketIO.Server;
    private httpServer: http.Server;

    private constructor() {
        this.app = express();
        this.port = SERVER_PORT;

        this.httpServer = new http.Server(this.app);
        this.io = socketIO(this.httpServer);
        this.escucharSockets();

    }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    private escucharSockets() {
        console.log("Escuchando conexiones - sockets");

        this.io.on('connection', cliente => {

            //conectar cliente
            socket.conectarCliente(cliente);

            socket.configurarUsuario(cliente,this.io);

            socket.desconectar(cliente);

            socket.mensaje(cliente, this.io);

           

        });

    }


    start(callback: Function) {
        this.httpServer.listen(this.port, callback);
    }

}