//Componente para manejar la creación, eliminación y edición de clientes.
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientManagementService } from 'src/app/Services/client-management.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  constructor(private clientServices:ClientManagementService) {
      //Servicios se deben invocar acá
      //VARIABLES. SINTAXIS= Nombre:Tipo = Valor
   }
  newClient: Client={
    Nombre:"",
    Apellido1:"",
    Apellido2:"",
    ID:0,
    Telefono:0,
    Direccion:"",
    Ingresos:"",
    Usuario:"",
    
  }
  selectedClient: Client={
    Nombre:"",
    Apellido1:"",
    Apellido2:"",
    ID:0,
    Telefono:0,
    Direccion:"",
    Ingresos:"",
    Usuario:"",
    
  }
  clients: Client[]=[]
  editingID: number | undefined = 0;
  ngOnInit(): void { //Función que se ejecuta de primero cuando carga componentes
    
    this.clients = this.clientServices.getClients();
  }

  //Envía el ID del cliente que se va a eliminar al servicio
  delete(id : number | undefined){
    this.clients = this.clientServices.deleteClient(id);
  }

  //Click en el botón de editar genera cajas de texto para escribir editables
  edit(client : Client){
    this.editingID = client.ID;
    this.selectedClient = client;
  }

  //Envía los datos del cliente modificados, pertenece al botón de "aceptar"
  submit(){
    this.editingID = 0;
    this.clients = this.clientServices.editClient(this.selectedClient)
  }

  //Envía los datos de un nuevo cliente al servicio
  add(){
    this.clients = this.clientServices.addClient(this.newClient);
    this.newClient = {
      Nombre:"",
    Apellido1:"",
    Apellido2:"",
    ID:0,
    Telefono:0,
    Direccion:"",
    Ingresos:"",
    Usuario:"",
    }
  }

}
