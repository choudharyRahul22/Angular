import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverAddEvent = new EventEmitter<{name: string, content: string}>();
  @Output() serverBluePrintAddEvent = new EventEmitter<{name: string, content: string}>();

  newServerName = '';
  newServerContent = '';
  @ViewChild('serverContentLocalRef') serverContentLocalRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameLocalRef: HTMLInputElement) {

    this.serverAddEvent.emit({
      name: serverNameLocalRef.value,
      content: this.serverContentLocalRef.nativeElement.value
    });
  }

  onAddBlueprint(serverNameLocalRef: HTMLInputElement) {
    this.serverBluePrintAddEvent.emit({
      name: serverNameLocalRef.value,
      content: this.serverContentLocalRef.nativeElement.value
    });
  }


}
