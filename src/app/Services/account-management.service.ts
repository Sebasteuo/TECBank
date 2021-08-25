//Clases para el manejo de datos y consultas al API
import { Injectable } from '@angular/core';
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
    constructor() { }
  /**
   * 
   * @returns 
   */
  getAccount(){  //Función que obtiene roles SE CAMBIARÀ CON EL API
    this.accounts=[{  ID: 5678,
    Moneda: 1,
    Tipo:1,
    Descripcion:"hola",
    Cliente:86651418,}, {  ID: 2222,
      Moneda: 1,
      Tipo:1,
      Descripcion:"hola",
      Cliente:86651418,}];
    return this.accounts;
  }
  
  //Envía al API el ID de la cuenta a eliminar
  deleteAccount(id: number | undefined) {
    this.accounts = this.accounts.filter((obj) => obj.ID !== id);
    return this.accounts;
  }

  //Envía al API los datos de la cuenta modificada
  editAccount(selecter: Account) {
    this.accounts.forEach((account,index)=>{ //Recorre todos los elementos del array y mantiene los índices
      if(account.ID==selecter.ID){ //Cada vez que se ejecuta evalua el ID del elemento que se está recorriendo
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
