import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import sha256 from 'crypto-js/sha256';
import { AuthenticationService } from 'src/app/Services/authentication.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }
  onSubmit(user:string, password:string, id:string){
    var pass = (CryptoJS.MD5(password) as unknown) as string;
    this.authenticationService.Register(id as unknown as number,"Cliente",user, CryptoJS.enc.Base64.stringify(sha256(pass))); 


  }

}
