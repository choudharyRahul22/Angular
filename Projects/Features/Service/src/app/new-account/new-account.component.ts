import { Component } from '@angular/core';
import {LogServiceService} from "../services/logging/log-service.service";
import {AccountServiceService} from "../services/logging/account-service.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: []
})
export class NewAccountComponent {

  constructor(private loggingService: LogServiceService , private accountService: AccountServiceService){
    this.accountService.accountUpdated.subscribe(
      (status) => alert('New Updated Status : ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    //this.loggingService.logStatus(accountStatus);
  }
}
