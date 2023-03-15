import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  //components need imported here on creation. then imported too
  declarations: [AppComponent, ServerComponent, ServersComponent],
  imports: [BrowserModule], // may need more imports here shortly
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
