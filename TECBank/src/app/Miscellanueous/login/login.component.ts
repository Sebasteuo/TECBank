import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import Base64 from 'crypto-js/enc-base64';
import sha256 from 'crypto-js/sha256';
import { Credentials } from 'src/app/models/credentials.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  newCredentials: Credentials={ user:"", password:"", tipo:""}

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }
  submit(){
   //var pass = (CryptoJS.MD5(password) as unknown) as string;
   //console.log(CryptoJS.enc.Base64.stringify(sha256(pass)))
    //this.authenticationService.login(email,CryptoJS.enc.Base64.stringify(sha256(pass))); 
    this.authenticationService.login(this.newCredentials);
  }
 
}
