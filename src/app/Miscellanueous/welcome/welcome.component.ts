//Página principal
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  isloggedIn: boolean=false
  ngOnInit(): void {
    this.isloggedIn= this.loggedIn()
  }

  loggedIn() {
    if (localStorage.getItem('User') != null)
      return true;
    else
      return false;
  }

}
