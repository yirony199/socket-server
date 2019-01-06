import { Usuario } from './usuario';
export class UsuariosLista {

    private lista: Usuario[] = [];

    constructor() {

    }

    public agregar(usuario: Usuario) {
        this.lista.push(usuario);
        console.log(this.lista);
        return usuario;
    }

    public actualizarNombre(id: string, nombre: string) {
        for (let usuario of this.lista) {
            if (usuario.id == id) {
                usuario.nombre = nombre;
                break;
            }
        }

        console.log("Actaulizando usuario");
        console.log(this.lista);
    }

    public getlista() {
        return this.lista.filter(usuario=> usuario.nombre != "sin-nombre");
    }

    public getUsuario(id: string) {
        return this.lista.find(usuario => {
            return usuario.id == id;
        });
    }

    public getUsuarioEnSala(sala: string) {
        return this.lista.filter(usuario => {
            return usuario.sala == sala;
        })
    }

    public borrarUsuario(id: string) {

        const tempUsuario = this.getUsuario(id);
        this.lista = this.lista.filter(usuario => usuario.id != id);
        console.log(this.lista);
        return tempUsuario;

    }

}