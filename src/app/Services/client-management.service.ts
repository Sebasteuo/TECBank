import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientManagementService {
  clients: Client[] = []
  constructor() { }
  /**
   * 
   * @returns 
   */
  getClients(){  //Función que obtiene roles SE CAMBIARÀ CON EL API
    this.clients=[{  Nombre:"Prueba",
    Apellido1:"Alba",
    Apellido2:"Vives",
    ID:39275482,
    Telefono:86651418,
    Direccion:"Pitahaya, Agua Caliente",
    Ingresos:"Muchos",
    Usuario:"Sabbi",}];
    return this.clients;
  }
  
  deleteClient(id: number | undefined) {
    this.clients = this.clients.filter((obj) => obj.ID !== id);
    return this.clients;
  }

  editClient(selecter: Client) {
    this.clients.forEach((role,index)=>{
      if(role.ID==selecter.ID){
        this.clients[index] = selecter

      }
    }
    )
    return this.clients
  }

  addClient(Client : Client){
    this.clients.push(Client);
    return this.clients;
  }
}
