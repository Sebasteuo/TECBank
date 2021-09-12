//Componente para manejar la creación, eliminación y edición de roles del sistema.
import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role.model';
import { RoleManagementService } from 'src/app/Services/role-management.service';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  //Indicar servicios NombreVariable: Tipo = Valor
  constructor(private rolesServices: RoleManagementService) { }
  roles: Role[] = []
  newRole : Role = {
    idRol:0,
    nombre : '',
    descripcion : ''
  }

  selectedRole : Role = {
    idRol:0,
    nombre : '',
    descripcion : ''
  }

  editingID: number | undefined = 0;
  ngOnInit(): void { //Función que se ejecuta de primero cuando carga componentes
    
    this.rolesServices.getRoles().then(res=>{this.roles=res});
  }

  //Envía el idRol del rol que se va a eliminar al servicio
  delete(idRol : number | undefined){
     this.rolesServices.deleteRole(idRol).then(res=>{ this.roles=res });
  }

  //Hace cajas de texto editables
  edit(role : Role){
    this.editingID = role.idRol;
    this.selectedRole = role;
  }

  //Envía los datos del Rol editado al servicio
  submit(){
    this.editingID = 0;
    this.rolesServices.editRole(this.selectedRole).then(res=>this.roles=res)
  }

  getRandomInt(min:number, max:number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  //Envía los datos de un nuevo rol al servicio
  add(){
    this.newRole.idRol=this.getRandomInt(1,100)
    this.rolesServices.addRole(this.newRole).then(res=>this.roles=res);
    this.newRole = {
      idRol:0,
      nombre : '',
      descripcion : ''
    }
  }

}
