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
  ngOnInit(): void { //Función que se ejecuta de primero cuando carga componentes
    this.roles = this.rolesServices.getRoles();
  }

}
