import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId: number = 1;
  serverStatus: string = 'online';
  serverIP: string = '127.0.0.1';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }

  getServerIP(){
    return this.serverIP;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }


}
