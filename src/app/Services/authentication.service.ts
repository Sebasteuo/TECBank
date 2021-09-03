import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credentials } from '../models/credentials.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  newUser: Credentials={user:"",password:"", tipo:""}
  constructor(private router:Router,public toastr:ToastrService) { }
  Users:Credentials[]=[{user:"Admin",password:"ViuxKBBd51bn4OHBnzLVR/D9Jm17x0K03Ky3AGp4mvQ=", tipo: "Administrador"}, {user:"Prueba", password:"ViuxKBBd51bn4OHBnzLVR/D9Jm17x0K03Ky3AGp4mvQ=", tipo: "Cliente"}]
  login(user:string,password:string){
    
      this.Users.forEach(obj=>{
        if(obj.user==user && obj.password==password){
          localStorage.setItem("User", user)
          localStorage.setItem("UserType", obj.tipo as string)
          localStorage.setItem("UserId", this.getClientID())
          this.router.navigate(["/Welcome"])
        }
        
      })    
     
  }

  getClientID(){
    return ""
  }
  logout(){
    localStorage.removeItem("User")
    localStorage.removeItem("UserType")
    this.router.navigate(["/Welcome"])
  }
  Register(id:string,user:string,password:string){
    if(id&&user&&password){
      this.newUser.user=user
      this.newUser.password=password
      this.Users.push(this.newUser)
      this.toastr.success("Registrado exitosamente","Exito")
      this.router.navigate(["/Login"])
    }
    
    else{
      this.toastr.error("Debe llenar todos los campos", "Error")
    }
  }
}
