//Clases para el manejo de datos con el API
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientManagementService {
  clients: Client[] = []
  currentClient: Client ={
    nombre:"",
    apellido_1:"",
    apellido_2:"",
    cedula:0,
    telefono:0,
    provincia:"",
    canton:"",
    distrito:"",
    ingreso_mensual:"",
    usuario:"",
    tipo:"",
    
  }
  constructor(public http:HttpClient) { }
  /**
   * 
   * @returns 
   */
  async getClients(){  //Función que obtiene clientes

    await this.http.get(environment.api+"/cliente").toPromise().then(res=>{
      this.clients=res as Client[]

    
    })

    return this.clients
    
  }

  async getClientsById(id:number){  //Función que obtiene clientes según su ID

    await this.http.get(environment.api+"/cliente/"+ id).toPromise().then(res=>{
      this.currentClient=res as Client
    console.log(this.currentClient)
    
    })

    return this.currentClient
    
  }
  
  //Envía el ID del cliente que se va a eliminar al API
  async deleteClient(id: number | undefined) {
    //this.clients = this.clients.filter((obj) => obj.cedula !== id);
    await this.http.delete(environment.api+'/Cliente/'+id).toPromise().then(res=>{this.getClients().then(result=>{this.clients=result})})
    return this.clients
  }

  //Envía los datos modificados al API (esta función se comporta igual a la que account-management.service)
  async editClient(client: Client) {
    await this.http.put(environment.api+"/cliente", client).toPromise().then(res=>{this.getClients().then(result=>{this.clients=result})})
    return this.clients
  }

  //Envía los datos de un nuevo cliente al API
  async addClient(Client : Client){
    const body = {}
    await this.http.post(environment.api+"/cliente", Client).toPromise().then(res=>{this.getClients().then(result=>{this.clients=result})})
    return this.clients;
  }
}
