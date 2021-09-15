//Componente para manejar depósitos y retiros de las cuentas bancarias.
import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { BalanceLine } from 'src/app/models/balance-line.model';
import { Transfer } from 'src/app/models/transfer.model';
import { AccountManagementService } from 'src/app/Services/account-management.service';
import { TransferManagementService } from 'src/app/Services/transfer-management.service';

@Component({
  selector: 'app-withdrawals',
  templateUrl: './withdrawals.component.html',
  styleUrls: ['./withdrawals.component.scss']
})
export class WithdrawalsComponent implements OnInit {

  constructor(private accountservice:AccountManagementService, private transferService: TransferManagementService) { }
  accounts: Account[] = [] //Contiene la lista con todas las cuentas bancarias
  selectedAccount: Account={ numero:0,
    descripcion : '',
    tipo: 0,
    moneda: 0,
    cedulaCliente:0,
    saldo:0,
    usuarioCliente:"",
    numeroCuenta:0,
  }
  
  newline: Transfer={idPago:0,
    monto:"",
    numeroCuentaDestino:"",
    descripcion:"",
    fechaPago:"",
    numeroDeCuenta:"",};
  selectedValue: number|undefined=0
  selectedMovimiento: string= "Retiro"

  getRandomInt(min:number, max:number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }  

  ngOnInit(): void {
    this.accountservice.getAccount().then(res=>{this.accounts=res})
  }
  selectValue(value:number|undefined){
    this.selectedValue=value

  }
  selectMovimiento(value:string){
    this.selectedMovimiento=value

  }

  add(){
    this.newline.idPago=this.getRandomInt(1,1000)
    this.newline.numeroCuentaDestino=this.newline.numeroDeCuenta
    this.newline.descripcion=this.selectedMovimiento
    this.transferService.makeTransfers(this.newline)
    this.newline ={idPago:0,
      monto:"",
      numeroCuentaDestino:"",
      descripcion:"",
      fechaPago:"",
      numeroDeCuenta:"",};

  }

}
