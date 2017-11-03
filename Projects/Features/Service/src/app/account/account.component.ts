import { Component, Input } from '@angular/core';
import {LogServiceService} from "../services/logging/log-service.service";
import {AccountServiceService} from "../services/logging/account-service.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [ ]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;


  constructor(private loggingService: LogServiceService , private accountService: AccountServiceService){}


  onSetTo(status: string) {
    this.accountService.updateAccount(this.id, status);
    //this.loggingService.logStatus(status);
    this.accountService.accountUpdated.emit(status);
  }
}
