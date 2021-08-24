import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { AccountManagementService } from 'src/app/Services/account-management.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private accountservice: AccountManagementService) { }
  selectedValue: string = "Seleccione un tipo de moneda"
  selectedType: string = "Seleccione un tipo de cuenta"
  selectedValueID: number = 0
  selectedTypeID: number = 0
  accounts: Account[] = []
  editTipo: string = ""
  editTipoID: number = 0
  newAccount : Account = {
    ID:0,
    Descripcion : '',
    Tipo: 0,
    Moneda: 0,
    Cliente:0
  }

  selectedAccount : Account = {
    ID:0,
    Descripcion : '',
    Tipo: 0,
    Moneda: 0,
    Cliente:0
  }

  editingID: number | undefined = 0;
  ngOnInit(): void { //Función que se ejecuta de primero cuando carga componentes
    
    this.accounts = this.accountservice.getAccount();
  }

  selectMoneda(value : string,ID: number){
    this.selectedValue = value
    this.selectedValueID = ID
  }
  selectType(value : string,ID: number){
    this.selectedType = value
    this.selectedTypeID = ID
  }
  selectTypeEdit(value : string,ID: number){
    this.editTipo = value
    this.editTipoID = ID
  }
  delete(id : number | undefined){
    this.accounts = this.accountservice.deleteAccount(id);
  }

  edit(account : Account){
    this.editingID = account.ID;
    this.selectedAccount = account;
    if(account.Tipo==1){
        this.editTipo = "Corriente"
        this.editTipoID = 1
    }
    else{
      this.editTipo = "Ahorros"
      this.editTipoID = 2
    }
  }

  submit(){
    this.selectedAccount.Tipo = this.editTipoID
    this.editingID = 0;
    this.accounts = this.accountservice.editAccount(this.selectedAccount)

  }

  add(){
    this.newAccount.Moneda=this.selectedValueID;
    this.newAccount.Tipo=this.selectedTypeID;
    this.accounts = this.accountservice.addAccount(this.newAccount);
    this.newAccount = {
      ID:0,
      Descripcion : '',
      Tipo: 0,
      Moneda: 0,
      Cliente:0
    }
  }

}
