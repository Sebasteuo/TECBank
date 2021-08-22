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

  
  delete(id : number | undefined){
    this.roles = this.rolesServices.deleteRole(id);
  }

  edit(role : Role){
    this.editingID = role.ID;
    this.selectedRole = role;
  }

  submit(){
    this.editingID = 0;
    this.roles = this.rolesServices.editRole(this.selectedRole)
  }

  add(){
    this.roles = this.rolesServices.addRole(this.newRole);
    this.newRole = {
      ID:0,
      Nombre : '',
      Descripcion : ''
    }
  }

}
