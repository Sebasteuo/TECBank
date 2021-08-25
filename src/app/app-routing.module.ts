//Módulo de rutas
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './Miscellanueous/welcome/welcome.component';
import { RolesComponent } from './Administration/roles/roles.component';
import { ClientesComponent } from './Administration/clientes/clientes.component';
import { AccountComponent } from './Administration/account/account.component';
import { WithdrawalsComponent } from './Administration/withdrawals/withdrawals.component';


//Primer ruta por defecto
const routes: Routes = [
  //Path es la ruta del URL, y Component es el componente que se debe cargar respectivamente
  { path: '', redirectTo: 'Welcome', pathMatch: 'full' }, //Al entrar al localhost, se le agrega a la ruta Welcome
  { path: 'Welcome', component: WelcomeComponent}, // Se hacen navegables y  los componentes
  { path: 'Roles', component: RolesComponent}, 
  { path: 'Clientes', component: ClientesComponent},
  { path: 'Cuentas', component: AccountComponent},
  { path: 'Caja', component: WithdrawalsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
