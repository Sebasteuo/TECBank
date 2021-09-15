import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AsyncSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Credentials } from '../models/credentials.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  newUser: Credentials={user:"",password:"", tipo:""}

  constructor(private router:Router,public toastr:ToastrService, public http:HttpClient) { }
  Users:Credentials[]=[]
 async login(credentials:Credentials){

  console.log("---")
    await this.http.post(environment.api+"/usuario", credentials, { responseType: "text"} ).toPromise().then(res=>{

   
    
      localStorage.setItem("User", credentials.user as unknown as string)
    
          localStorage.setItem("UserType", res as string)
        
          //localStorage.setItem("UserId", this.getClientID())
          this.router.navigate(["/Welcome"])
     
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
  async Register(tipo:string,user:string,password:string){
    if(tipo&&user&&password){
      this.newUser.user=user
      this.newUser.password=password
      this.newUser.tipo=tipo
      await this.http.post(environment.api+"/usuario/Registrar", this.newUser).toPromise().then(res=>{this.toastr.success("Registrado exitosamente","Exito")
      this.router.navigate(["/Login"])} , error=>{
        this.toastr.error("No se pudo registrar", "Error")
      })
    }

    
    else{
      this.toastr.error("Debe llenar todos los campos", "Error")
    }
  }
}
