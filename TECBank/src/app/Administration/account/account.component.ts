//Componente para manejar creación, edición y eliminación de cuentas bancarias.

import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { AccountManagementService } from 'src/app/Services/account-management.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  //Servicios se deben invocar acá
  constructor(private accountservice: AccountManagementService) { }
   //VARIABLES. SINTAXIS= Nombre:Tipo = Valor
  selectedValue: string = "Seleccione un tipo de moneda"
  selectedType: string = "Seleccione un tipo de cuenta"
  selectedValueID: number = 0
  selectedTypeID: number = 0
  accounts: Account[] = []
  editTipo: string = ""
  editTipoID: number = 0

  //Variable de tipo de creación propia (modelos) (En este caso la variable es de tipo Account)
  //Lo que va entre las llaves es un JSON. Un objeto JSON siempre inicia con llaves, los valores se asignan con ':' y se debe separar con coma
  newAccount : Account = {
    ID:0,
    Descripcion : '',
    Tipo: 0,
    Moneda: 0,
    Cliente:0
  }
  //Variable de tipo de creación propia (modelos) (En este caso la variable es de tipo Account)
  selectedAccount : Account = {
    ID:0,
    Descripcion : '',
    Tipo: 0,
    Moneda: 0,
    Cliente:0
  }


  editingID: number | undefined = 0; //Variable que contiene el ID del item que se está editando
  ngOnInit(): void { //Función que se ejecuta de primero cuando carga componentes
    
    this.accounts = this.accountservice.getAccount();
  }

  //Funciones Select para que los DropDownList funcionen, reciben los valores seleccionados del botón
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


  //Recibe los datos de la cuenta que se quieren modificar y controla la variable editingID(controla si aparecen las cajas de texto)
  edit(account : Account){
    this.editingID = account.ID;
    this.selectedAccount = account;
    if(account.Tipo==1){ //IF para mostrar texto en lugar de un ID
        this.editTipo = "Corriente"
        this.editTipoID = 1
    }
    else{
      this.editTipo = "Ahorros"
      this.editTipoID = 2
    }
  }

  //Envía los datos de la cuenta modificada al servicio
  submit(){
    this.selectedAccount.Tipo = this.editTipoID
    this.editingID = 0;
    this.accounts = this.accountservice.editAccount(this.selectedAccount)

  }

  //Envía los datos de una nueva cuenta al servicio y restablece las cajas de texto
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