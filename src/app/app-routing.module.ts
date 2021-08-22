import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './Miscellanueous/welcome/welcome.component';
import { RolesComponent } from './Administration/roles/roles.component';


//Primer ruta por defecto
const routes: Routes = [
  { path: '', redirectTo: 'Welcome', pathMatch: 'full' }, //Al entrar al localhost, se le agrega a la ruta Welcome
  { path: 'Welcome', component: WelcomeComponent}, // Se hacen navegables los componentes
  { path: 'Roles', component: RolesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
