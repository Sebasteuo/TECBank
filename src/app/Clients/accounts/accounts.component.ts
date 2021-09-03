import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { Transfer } from 'src/app/models/transfer.model';
import { TransferManagementService } from 'src/app/Services/transfer-management.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  constructor(private transferService: TransferManagementService) { }

  selectedAccount:string=""
  accounts:Account[]=[]
  transfers:Transfer[]=[]
  newTransfer:Transfer={
    id:0,
    account:0,
    receiver:0,
    amount:0,
    description:"",
    date:"",
    clientId:0,
  }
  active = 1
  ngOnInit(): void {
    this.transfers=this.transferService.getTransfers(localStorage.getItem("UserId") as string )
  }

  submit(){
    this.transferService.makeTransfers(this.newTransfer)
    this.newTransfer={
      id:0,
      account:0,
      receiver:0,
      amount:0,
      description:"",
      date:"",
      clientId:0,
    }

  }

  selectAccount(id:string){
    this.selectedAccount=id
  }

}
