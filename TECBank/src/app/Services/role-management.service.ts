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
  deleteRole(idRol: number | undefined) {
    this.roles = this.roles.filter((obj) => obj.idRol !== idRol);
    return this.roles;
  }

  //Envía al API el idRol del rol Editado
  editRole(selecter: Role) {
    this.roles.forEach((role,index)=>{
      if(role.idRol==selecter.idRol){
        this.roles[index] = selecter

      }
    }
    )
    return this.roles
  }

  //Envía al API el idRol del rol agregado
  addRole(role : Role){
    role.idRol = this.roles.length + 1;
    this.roles.push(role);
    return this.roles;
  }
}
