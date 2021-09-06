import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { CardManagementService } from 'src/app/Services/card-management.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

 //Servicios se deben invocar acá
 constructor(private cardservice: CardManagementService) { }
 //VARIABLES. SINTAXIS= Nombre:Tipo = Valor
selectedValue: string = "Seleccione un tipo de moneda"
selectedType: string = "Seleccione un tipo de cuenta"
selectedValueID: number = 0
selectedTypeID: number = 0
cards: Card[] = []
editTipo: string = ""
editTipoID: number = 0

//Variable de tipo de creación propia (modelos) (En este caso la variable es de tipo Account)
//Lo que va entre las llaves es un JSON. Un objeto JSON siempre inicia con llaves, los valores se asignan con ':' y se debe separar con coma
newCard : Card = {
  id: 0,
  tipo: 0,
  codigoSeguridad:0,
  fechaExpiracion:"",
  saldo:0,
  cliente:0
}
//Variable de tipo de creación propia (modelos) (En este caso la variable es de tipo Account)
selectedCard : Card = {
  id: 0,
      tipo: 0,
      codigoSeguridad:0,
      fechaExpiracion:"",
      saldo:0,
      cliente:0
}


editingID: number | undefined = 0; //Variable que contiene el ID del item que se está editando
ngOnInit(): void { //Función que se ejecuta de primero cuando carga componentes
  
  this.cards = this.cardservice.getCards();
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
  this.cards = this.cardservice.deleteCard(id);
}


//Recibe los datos de la cuenta que se quieren modificar y controla la variable editingID(controla si aparecen las cajas de texto)
edit(card : Card){
  this.editingID = card.id;
  this.selectedCard = card;
  if(card.tipo==1){ //IF para mostrar texto en lugar de un ID
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
  this.selectedCard.tipo = this.editTipoID
  this.editingID = 0;
  this.cards = this.cardservice.editCard(this.selectedCard)

}

//Envía los datos de una nueva cuenta al servicio y restablece las cajas de texto
add(){
  this.newCard.tipo=this.selectedTypeID;
  this.cards = this.cardservice.addCard(this.newCard);
  this.newCard = {
    id: 0,
      tipo: 0,
      codigoSeguridad:0,
      fechaExpiracion:"",
      saldo:0,
      cliente: 0
  }
}


}
