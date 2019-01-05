import { Socket } from "socket.io";
import socketIO from 'socket.io';

export const desconectar = (cliente: Socket) => {

    cliente.on('disconnect', () => {
        console.log("Cliente descontados");
    });

}

//Escuchar mensajes
export const mensaje = (cliente: Socket, io:socketIO.Server) => {
    cliente.on('mensaje', (payload: { de: string, cuerpo: string }, callback) => {
        console.log("Mensaje recibido", payload);

       io.emit("mensaje-nuevo",payload );

    })
}

