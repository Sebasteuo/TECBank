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
  selectedAccount: Account={ numero:0,
    descripcion : '',
    tipo: 0,
    moneda: 0,
    cedulaCliente:0,
    saldo:0,
    usuarioCliente:"",
  }
  newline: BalanceLine={movimiento:0};
  selectedValue: number|undefined=0
  selectedMovimiento: string= "Retiro"
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
    
  }

}
