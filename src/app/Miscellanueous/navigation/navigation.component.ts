//Componente padre de la barra de navegación, carga la barra de navegación correspondiente al tipo de cliente
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  //Estas variables de estado se manejan revisando si existe o no un cookie de loggeo y de tipo de cliente
  logged: boolean = false; //Controla si muestra o no el botón de iniciar sesión
  showclient: boolean = false; //Controla si muestra o no la barra de cliente
  showadmin: boolean = false; //Controla si muestta o no la barra de administrador
  constructor() { }

  ngOnInit(): void {
    this.logged = this.loggedIn();
    this.showadmin = this.isAdmin();
    this.showclient = this.isClient();
  }
  loggedIn() {
    if (localStorage.getItem('User') != null)
      return true;
    else
      return false;
  }

  isClient() {
    if (localStorage.getItem('UserType') == 'Client')
      return true;
    else
      return false;
  }

  isAdmin() {
    if (localStorage.getItem('UserType') == 'admin')
      return true;
    else
      return false;
  }
  
}
