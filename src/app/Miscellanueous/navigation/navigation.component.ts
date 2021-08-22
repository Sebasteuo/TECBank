import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  logged: boolean = true;
  //logged: boolean = false;
  showclient: boolean = false;
  showadmin: boolean = true;
  //showoperator: boolean = false; 
  constructor() { }

  ngOnInit(): void {
  }

}
