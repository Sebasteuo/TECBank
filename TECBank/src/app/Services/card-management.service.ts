import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardManagementService {

  cards: Card[] = []
  constructor(public http:HttpClient) { }
  /**
   * 
   * @returns 
   */
  async getCards() {  //Función que obtiene roles SE CAMBIARÀ CON EL API
    
    await this.http.get(environment.api+"/Tarjeta").toPromise().then(res=>{
      this.cards=res as Card[]})
    return this.cards;
  }

  //Envía al API el ID de la cuenta a eliminar
  async deleteCard(id: number | undefined) {
    await this.http.delete(environment.api+'/Tarjeta/'+id).toPromise().then(res=>{this.getCards().then(result=>{this.cards=result})})
    return this.cards
  }

  //Envía al API los datos de la cuenta modificada
  editCard(selecter: Card) {
    this.cards.forEach((card, index) => { //Recorre todos los elementos del array y mantiene los índices
      if (card.numeroTarjeta == selecter.numeroTarjeta) { //Cada vez que se ejecuta evalua el ID del elemento que se está recorriendo
        this.cards[index] = selecter //Si se cumple la condición del IF asigna los datos nuevos en la posición por la que iba recorriendo

      }
    }
    )
    return this.cards
  }

  //Envía al API los datos de una cuenta nueva
  addCard(Card: Card) {
    this.cards.push(Card);
    return this.cards;
  }

}
