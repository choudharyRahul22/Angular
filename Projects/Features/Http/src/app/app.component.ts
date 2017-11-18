import { Component } from '@angular/core';
import {ServerService} from "./server.service";
import {setTimeout} from "timers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  constructor(private serversService: ServerService) {}

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  onSaveServers() {
    this.serversService.storeServers(this.servers)
      .subscribe(
        (response) => {console.log(response)},
        (error) => {console.log(error)}
      );
  }

  onGetServers() {
    this.serversService.getServers()
      .subscribe(
        (servers: any[]) => {
          console.log(servers);
          this.servers = servers;
        },
        (error) => {console.log(error)}
      );
  }

  appName = '';

  onGetAppName(){
    setTimeout(() => {
      this.serversService.getAppName().subscribe(
        (data: any) => {
          this.appName = data;
          console.log(this.appName);
        }
      );
    },2000);
  }

  myApp = this.serversService.getAppName();

}
