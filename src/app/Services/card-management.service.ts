import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardManagementService {

  cards: Card[] = []
  constructor() { }
  /**
   * 
   * @returns 
   */
  getCards() {  //Función que obtiene roles SE CAMBIARÀ CON EL API
    this.cards = [{
      id: 5678,
      tipo: 1,
      codigoSeguridad: 13,
      fechaExpiracion: "hola2",
      saldo: 86651418,
      cliente:131414
    }, {
      id: 2222,
      tipo: 2,
      codigoSeguridad: 1,
      fechaExpiracion: "hola",
      saldo: 86651418,
      cliente: 1832913
    }];
    return this.cards;
  }

  //Envía al API el ID de la cuenta a eliminar
  deleteCard(id: number | undefined) {
    this.cards = this.cards.filter((obj) => obj.id !== id);
    return this.cards;
  }

  //Envía al API los datos de la cuenta modificada
  editCard(selecter: Card) {
    this.cards.forEach((card, index) => { //Recorre todos los elementos del array y mantiene los índices
      if (card.id == selecter.id) { //Cada vez que se ejecuta evalua el ID del elemento que se está recorriendo
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
