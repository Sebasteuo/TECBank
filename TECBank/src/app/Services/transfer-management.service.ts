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
      await this.http.get(environment.api+"/pago/"+id).toPromise().then(res=>{
        this.transfers=res as Transfer[]
  
      
      })
      return this.transfers;
    
  }



  async makeTransfers(transfer:Transfer){
    await this.http.post(environment.api+"/pago", Transfer).toPromise().then(res=>{this.getTransfers(1).then(result=>{this.transfers=result})})
    return this.transfers;
  }

}
