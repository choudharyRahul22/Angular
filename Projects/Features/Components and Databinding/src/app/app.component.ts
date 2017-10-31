import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {type: 'server', name: 'ServerName' , content: 'ServerContent'}
  ];

  onServerAdded(serverData: {name: string, content: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }

  onBlueprintAdded(serverBluePrintData: {name: string, content: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverBluePrintData.name,
      content: serverBluePrintData.content
    });
  }

}
