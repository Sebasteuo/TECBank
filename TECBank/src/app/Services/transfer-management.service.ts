import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Transfer } from '../models/transfer.model';

@Injectable({
  providedIn: 'root'
})
export class TransferManagementService {

  transfers:Transfer[]=[]
  
  constructor(private http:HttpClient) { }

  async getTransfers(id:number){
    
      //this.roles=[{idRol:1, nombre:"Administrador", descripcion: "Jefe"},{idRol:2, nombre:"Cliente", descripcion: "Probador"}];
      await this.http.get(environment.api+"/pago").toPromise().then(res=>{
        this.transfers=res as Transfer[]
      console.log(this.transfers)
      
      })
      return this.transfers;
    
  }



  async makeTransfers(transfer:Transfer){
   
    var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var hoy = mm  + '/' + dd + '/' + yyyy;

transfer.fechaPago = hoy

    await this.http.post(environment.api+"/pago", transfer).toPromise().then(res=>{this.getTransfers(1).then(result=>{this.transfers=result})})
    return this.transfers;
  }

}
