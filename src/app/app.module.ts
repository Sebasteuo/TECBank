//Acá se importan dependencias 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { FlatpickrModule } from 'angularx-flatpickr';
import { Spanish } from 'flatpickr/dist/l10n/es';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RolesComponent } from './Administration/roles/roles.component';
import { NavigationComponent } from './Miscellanueous/navigation/navigation.component';
import { WelcomeComponent } from './Miscellanueous/welcome/welcome.component';
import { AdminComponent } from './Miscellanueous/navigation/admin/admin.component';
import { ClienteComponent } from './Miscellanueous/navigation/cliente/cliente.component';
import { FormsModule } from '@angular/forms';
import { ClientesComponent } from './Administration/clientes/clientes.component';
import { AccountComponent } from './Administration/account/account.component';
import { WithdrawalsComponent } from './Administration/withdrawals/withdrawals.component';
import { LoginComponent } from './Miscellanueous/login/login.component';
import { RegisterComponent } from './Miscellanueous/register/register.component';
import { CardsComponent } from './Administration/cards/cards.component';
import { AccountsComponent } from './Clients/accounts/accounts.component';
import { ClientCardComponent } from './Clients/client-card/client-card.component';
import { ClientLoanComponent } from './Clients/client-loan/client-loan.component';

@NgModule({
  declarations: [
    AppComponent,
    RolesComponent,
    NavigationComponent,
    WelcomeComponent,
    AdminComponent,
    ClienteComponent,
    ClientesComponent,
    AccountComponent,
    WithdrawalsComponent,
    LoginComponent,
    RegisterComponent,
    CardsComponent,
    AccountsComponent,
    ClientCardComponent,
    ClientLoanComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(), // ToastrModule added
    FlatpickrModule.forRoot({ locale: Spanish }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
