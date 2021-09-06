import { Injectable } from '@angular/core';
import { Transfer } from '../models/transfer.model';

@Injectable({
  providedIn: 'root'
})
export class TransferManagementService {

  transfers:Transfer[]=[]
  
  constructor() { }

  getTransfers(id:string){
      return this.transfers
  }

  makeTransfers(transfer:Transfer){
    this.transfers.push(transfer)
    return this.transfers
  }

}
