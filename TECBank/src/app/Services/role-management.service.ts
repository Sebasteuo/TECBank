//Clases para manejar los Roles
import { Injectable } from '@angular/core';
import { Role } from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleManagementService {
  roles: Role[]= []
  constructor() { }
  getRoles(){  //Función que obtiene roles SE CAMBIARÀ CON EL API
    this.roles=[{ID:1, Nombre:"Administrador", Descripcion: "Jefe"},{ID:2, Nombre:"Cliente", Descripcion: "Probador"}];
    return this.roles;
  }
  
  //Envía al API el ID del rol eliminado
  deleteRole(id: number | undefined) {
    this.roles = this.roles.filter((obj) => obj.ID !== id);
    return this.roles;
  }

  //Envía al API el ID del rol Editado
  editRole(selecter: Role) {
    this.roles.forEach((role,index)=>{
      if(role.ID==selecter.ID){
        this.roles[index] = selecter

      }
    }
    )
    return this.roles
  }

  //Envía al API el ID del rol agregado
  addRole(role : Role){
    role.ID = this.roles.length + 1;
    this.roles.push(role);
    return this.roles;
  }
}