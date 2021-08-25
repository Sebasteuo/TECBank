import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credentials } from '../models/credentials.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router:Router,public toastr:ToastrService) { }
  Users:Credentials[]=[{user:"Admin",password:"admin"}]
  login(user:string,password:string){
      this.Users.forEach(obj=>{
        if(obj.user==user && obj.password==password){
          localStorage.setItem("User", user)
          localStorage.setItem("UserType", "admin")
          this.router.navigate(["/Clientes"])
        }
        else{
            this.toastr.error("Credenciales incorrectos", "Error")
        }
      })    
     
  }
  logout(){
    localStorage.removeItem("User")
    localStorage.removeItem("UserType")
    this.router.navigate(["/Welcome"])
  }
}
