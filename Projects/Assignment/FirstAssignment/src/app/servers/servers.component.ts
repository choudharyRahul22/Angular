import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {


  serverCreationStatus = "No Server created";
  serverName = "";

  constructor() {
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created with Name : " + this.serverName;
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
