//Barra de navegación hacia los componentes del cliente

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  constructor() { }
  public isCollapsed = true; // Variable para controlar la apariencia de la barra de navegación
  ngOnInit(): void {
  }

}
