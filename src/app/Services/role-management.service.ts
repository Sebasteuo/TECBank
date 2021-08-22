import { Injectable } from '@angular/core';
import { Role } from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleManagementService {
  roles: Role[]= []
  constructor() { }
  getRoles(){  //Función que obtiene roles SE CAMBIARÀ CON EL API
    return [{ID:1, Nombre:"Administrador", Descripcion: "Jefe"},{ID:2, Nombre:"Cliente", Descripcion: "Probador"}];
  }
}
//