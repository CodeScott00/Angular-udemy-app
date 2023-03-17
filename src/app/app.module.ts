import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { PasswordComponent } from './password/password.component';
@NgModule({
  //components need imported here on creation. then imported too
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    PasswordComponent,
  ],
  imports: [BrowserModule, FormsModule], // may need more imports here shortly
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
