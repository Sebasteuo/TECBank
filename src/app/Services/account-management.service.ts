import { Injectable } from '@angular/core';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountManagementService {

  accounts: Account[] = []
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
  
  deleteAccount(id: number | undefined) {
    this.accounts = this.accounts.filter((obj) => obj.ID !== id);
    return this.accounts;
  }

  editAccount(selecter: Account) {
    this.accounts.forEach((account,index)=>{
      if(account.ID==selecter.ID){
        this.accounts[index] = selecter

      }
    }
    )
    return this.accounts
  }

  addAccount(Account : Account){
    this.accounts.push(Account);
    return this.accounts;
  }
}
