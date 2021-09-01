import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import Base64 from 'crypto-js/enc-base64';
import sha256 from 'crypto-js/sha256';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }
  onSubmit(email : string, password : string){
   var pass = (CryptoJS.MD5(password) as unknown) as string;
   console.log(CryptoJS.enc.Base64.stringify(sha256(pass)))
    this.authenticationService.login(email,CryptoJS.enc.Base64.stringify(sha256(pass))); 
    //this.authenticationService.login(email,password);
  }
 
}
