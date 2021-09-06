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
    ID:0,
    Nombre : '',
    Descripcion : ''
  }

  selectedRole : Role = {
    ID:0,
    Nombre : '',
    Descripcion : ''
  }

  editingID: number | undefined = 0;
  ngOnInit(): void { //Función que se ejecuta de primero cuando carga componentes
    
    this.roles = this.rolesServices.getRoles();
  }

  //Envía el ID del rol que se va a eliminar al servicio
  delete(id : number | undefined){
    this.roles = this.rolesServices.deleteRole(id);
  }

  //Hace cajas de texto editables
  edit(role : Role){
    this.editingID = role.ID;
    this.selectedRole = role;
  }

  //Envía los datos del Rol editado al servicio
  submit(){
    this.editingID = 0;
    this.roles = this.rolesServices.editRole(this.selectedRole)
  }

  //Envía los datos de un nuevo rol al servicio
  add(){
    this.roles = this.rolesServices.addRole(this.newRole);
    this.newRole = {
      ID:0,
      Nombre : '',
      Descripcion : ''
    }
  }

}
