//Componente para manejar depósitos y retiros de las cuentas bancarias.
import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { BalanceLine } from 'src/app/models/balance-line.model';
import { AccountManagementService } from 'src/app/Services/account-management.service';

@Component({
  selector: 'app-withdrawals',
  templateUrl: './withdrawals.component.html',
  styleUrls: ['./withdrawals.component.scss']
})
export class WithdrawalsComponent implements OnInit {

  constructor(private accountservice:AccountManagementService) { }
  accounts: Account[] = [] //Contiene la lista con todas las cuentas bancarias
  selectedAccount: Account={ ID:0,
    Descripcion : '',
    Tipo: 0,
    Moneda: 0,
    Cliente:0}
  newline: BalanceLine={movimiento:0};
  selectedValue: number|undefined=0
  selectedMovimiento: string= "Retiro"
  ngOnInit(): void {
    this.accounts=this.accountservice.getAccount()
  }
  selectValue(value:number|undefined){
    this.selectedValue=value

  }
  selectMovimiento(value:string){
    this.selectedMovimiento=value

  }
  add(){
    
  }

}
