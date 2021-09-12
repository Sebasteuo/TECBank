import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { Transfer } from 'src/app/models/transfer.model';
import { AccountManagementService } from 'src/app/Services/account-management.service';
import { TransferManagementService } from 'src/app/Services/transfer-management.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  constructor(private transferService: TransferManagementService, private accountService: AccountManagementService) { }

  selectedAccount:number|undefined=0
  accounts:Account[]=[]
  transfers:Transfer[]=[]
  newTransfer:Transfer={
    idPago:0,
    monto:0,
    numeroCuentaDestino:0,
    descripcion:"",
    fechaPago:"",
    numeroDeCuenta:0,
  }
  active = 1
  ngOnInit(): void {
    this.transferService.getTransfers(localStorage.getItem("UserId") as unknown as number ).then(res=>this.transfers=res)
    this.accountService.getAccount().then(res=>{this.accounts=res})
  }


  getRandomInt(min:number, max:number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }  
  submit(){
    this.transferService.makeTransfers(this.newTransfer)
    this.newTransfer={
      idPago:0,
      monto:0,
      numeroCuentaDestino:0,
      descripcion:"",
      fechaPago:"",
      numeroDeCuenta:0,
    }

  }

  selectAccount(id:number|undefined){
    this.selectedAccount=id
  }

}
