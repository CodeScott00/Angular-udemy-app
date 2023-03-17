import { Component } from '@angular/core';

@Component({
  //this is a decorator and is needed to tell angular this is a component
  selector: 'app-server', // selects the server files
  templateUrl: './server.component.html', // points to the html template //
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  serverId = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  getServerStatus() {
    return this.serverStatus;
  }
  //by convention: add component to name and the file server.component.ts for example
}
