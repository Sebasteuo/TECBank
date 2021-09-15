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

  selectedAccount: number | undefined = 0
  accounts: Account[] = []
  transfers: Transfer[] = []
  newTransfer: Transfer = {
    idPago: 0,
    monto: "",
    numeroCuentaDestino: "",
    descripcion: "",
    fechaPago: "",
    numeroDeCuenta: "",
  }
  active = 1
  list: Transfer[] = []

 

  ngOnInit(): void {



    this.accountService.getAccountById(localStorage.getItem("UserId") as unknown as string).then(res => {
      this.accounts = res
      this.getAllTransfers()
    })
  }
  async getAllTransfers() {
    this.accounts.forEach(account => {
      this.test(account)
    })
    return this.transfers

  }
  async test(account: Account) {
    this.transferService.getTransfers(account.numeroCuenta as unknown as string).then(res => {
      console.log("numero de cuenta: "+ account.numeroCuenta)
      console.log("Cantidad de Movimientos: "+res.length)
      this.list=res
      this.test2()
    })
  }
  async test2() {
    console.log(this.list.length)
   this.list.forEach(element => {
      this.transfers.push(element)
    })
  }
  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  submit() {
    this.newTransfer.idPago = this.getRandomInt(1, 1000)
    this.transferService.makeTransfers(this.newTransfer).then(res => this.transfers = res)
    this.newTransfer = {
      idPago: 0,
      monto: "",
      numeroCuentaDestino: "",
      descripcion: "",
      fechaPago: "",
      numeroDeCuenta: "",
    }

  }

  selectAccount(id: number | undefined) {
    this.selectedAccount = id
  }

}
