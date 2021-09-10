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
      console.log(this.accounts)
    
    })
    return this.accounts;
  }
  
  //Envía al API el ID de la cuenta a eliminar
  async deleteAccount(id: number | undefined) {

    await this.http.delete(environment.api+'/cuenta/'+id).toPromise().then(res=>{this.getAccount().then(result=>{this.accounts=result})})
    return this.accounts
  }

  //Envía al API los datos de la cuenta modificada
  editAccount(selecter: Account) {
    this.accounts.forEach((account,index)=>{ //Recorre todos los elementos del array y mantiene los índices
      if(account.numero==selecter.numero){ //Cada vez que se ejecuta evalua el ID del elemento que se está recorriendo
        this.accounts[index] = selecter //Si se cumple la condición del IF asigna los datos nuevos en la posición por la que iba recorriendo

      }
    }
    )
    return this.accounts
  }

  //Envía al API los datos de una cuenta nueva
  addAccount(Account : Account){
    this.accounts.push(Account);
    return this.accounts;
  }

  //
  makeMovement(ID:number,movement:string, value:number){

  }
}
