//Clases para manejar los Roles
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Role } from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleManagementService {
  roles: Role[]= []
  constructor(public http:HttpClient) { }
  async getRoles(){  //Función que obtiene roles SE CAMBIARÀ CON EL API
    //this.roles=[{idRol:1, nombre:"Administrador", descripcion: "Jefe"},{idRol:2, nombre:"Cliente", descripcion: "Probador"}];
    await this.http.get(environment.api+"/rol").toPromise().then(res=>{
      this.roles=res as Role[]

    
    })
    return this.roles;
  }
  
  //Envía al API el idRol del rol eliminado
  async deleteRole(idRol: number | undefined) {
    await this.http.delete(environment.api+'/Rol/'+idRol).toPromise().then(res=>{this.getRoles().then(result=>{this.roles=result})})
    return this.roles
  }

  //Envía al API el idRol del rol Editado
  async editRole(rol: Role) {
    await this.http.put(environment.api+"/rol", rol).toPromise().then(res=>{this.getRoles().then(result=>{this.roles=result})})
    return this.roles
  }

  //Envía al API el idRol del rol agregado
 async addRole(role : Role){
    await this.http.post(environment.api+"/rol", role).toPromise().then(res=>{this.getRoles().then(result=>{this.roles=result})})
    return this.roles;
  }
}
