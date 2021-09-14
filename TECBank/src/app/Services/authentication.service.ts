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
    await this.http.post(environment.api+"/usuario", credentials).toPromise()/*then(res=>{

      console.log("***")
      console.log(res)
      localStorage.setItem("User", credentials.user as unknown as string)
        console.log("AAAAAAAAAAAAAAAAA")
          localStorage.setItem("UserType", res as string)
          console.log("BBBBBBBBBBBBBBBBB")
          //localStorage.setItem("UserId", this.getClientID())
          this.router.navigate(["/Welcome"])
     
  })
    */
   
    /*
      this.Users.forEach(obj=>{
        if(obj.user==user && obj.password==password){
          localStorage.setItem("User", user)
          localStorage.setItem("UserType", obj.tipo as string)
          localStorage.setItem("UserId", this.getClientID())
          this.router.navigate(["/Welcome"])
        }
        
      })    */
     
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
