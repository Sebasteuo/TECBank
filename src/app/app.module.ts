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

@NgModule({
  declarations: [
    AppComponent,
    RolesComponent,
    NavigationComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(), // ToastrModule added
    FlatpickrModule.forRoot({ locale: Spanish }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
