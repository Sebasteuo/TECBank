//Barra de navegación hacia los componentes del cliente

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  constructor(private router:Router) { }
  public isCollapsed = true; //Controla la apariencia de la barra de navegación
  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem("User")
    localStorage.removeItem("UserType")
    this.router.navigate(["/Login"])
  }

}
