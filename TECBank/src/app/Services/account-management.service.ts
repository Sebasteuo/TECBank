//Clases para el manejo de datos y consultas al API
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Account } from '../models/account.model';
import { BalanceLine } from '../models/balance-line.model';
import { BalanceReport } from '../models/balance-report.model';

@Injectable({
  providedIn: 'root'
})
export class AccountManagementService {
  accounts: Account[] = []
  reports: BalanceReport[]=[]
  newLine: BalanceLine={movimiento:0}
    constructor(public http:HttpClient) { }
  /**
   * 
   * @returns 
   */
  async getAccount(){  //Función que obtiene roles SE CAMBIARÀ CON EL API
    await this.http.get(environment.api+"/Cuenta").toPromise().then(res=>{
      this.accounts=res as Account[]
      
    
    })
    return this.accounts;
  }

  async getAccountById(id:string){  //Función que obtiene roles SE CAMBIARÀ CON EL API
    await this.http.get(environment.api+"/Cuenta/"+id+"/2").toPromise().then(res=>{
      this.accounts=res as Account[]
      
    
    })
    return this.accounts;
  }
  
  //Envía al API el ID de la cuenta a eliminar
  async deleteAccount(id: number | undefined) {

    await this.http.delete(environment.api+'/cuenta/'+id).toPromise().then(res=>{this.getAccount().then(result=>{this.accounts=result})})
    return this.accounts
  }

  //Envía al API los datos de la cuenta modificada
  async editAccount(Cuenta: Account) {
    
    await this.http.put(environment.api+"/cuenta", Cuenta).toPromise().then(res=>{this.getAccount().then(result=>{this.accounts=result})})
    return this.accounts
  }

  //Envía al API los datos de una cuenta nueva
  async addAccount(Cuenta : Account){

    const body = {
    numero:Cuenta.numero,
      descripcion:Cuenta.descripcion,
      tipo: Cuenta.tipo as unknown as string,
      moneda: Cuenta.moneda as unknown as string,
      cedulaCliente: Cuenta.cedulaCliente,
      saldo: Cuenta.saldo,
      usuarioCliente: Cuenta.usuarioCliente,
      numeroCuenta: Cuenta.numeroCuenta, }

    await this.http.post(environment.api+"/cuenta", body).toPromise().then(res=>{this.getAccount().then(result=>{this.accounts=result})})
    return this.accounts;
  }

  //
  makeMovement(ID:number,movement:string, value:number){

  }
}
