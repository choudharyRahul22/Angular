import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {


  serverCreationStatus = "No Server created";
  serverName = "";
  servers = ['Testserver-1', 'Testserver-2', 'Testserver-3'];
  showServerName = false;
  log = [];
  date = [];

  constructor() {
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created with Name : " + this.serverName;
    this.servers.push(this.serverName);
    this.showServerName = !this.showServerName;
    this.log.push(this.log.length + 1);
  }

  onCreateDate() {
    this.serverCreationStatus = "Server was created with Name : " + this.serverName;
    this.servers.push(this.serverName);
    this.showServerName = !this.showServerName;
    this.date.push(new Date());
  }

  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  allowNewServer(){
    if(this.serverName.length >= 4){
      return false;
    }
    return true;
  }




}
