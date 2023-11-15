import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usuarios: User[] = [];

  constructor() {
  
    this.usuarios = []//JSON.parse(localStorage.getItem('users') || '[]');

      const user1: User = {
        id: 1,
        nombre: "Sebastian",
        apellido: "Arce",
        email: "sebas@eam.com",
        password: "123",
        tipo: "admin",
      };

      const user2: User = {
        id: 2,
        nombre: "Juan",
        apellido: "Barrero",
        email: "Juan@eam.com",
        password: "password456",
        tipo: "Gamer",
      };

      const user3: User = {
        id: 3,
        nombre: "Mariana",
        apellido: "Portela",
        email: "Mariana@eam.com",
        password: "1234",
        tipo: "invitado",
      };

      this.usuarios.push(user1, user2, user3);
      this.saveUsers();
    
  }

  agregarUsuario(nuevoUsuario: User) {
    
    nuevoUsuario.id = this.usuarios.length + 1;   
    this.usuarios.push(nuevoUsuario);
    
  }


  saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.usuarios));
  }

  getUser(){
    return this.usuarios
  }
}
