import {EventEmitter, Injectable} from '@angular/core';
import {LogServiceService} from "./log-service.service";

@Injectable()
export class AccountServiceService {

  accountUpdated = new EventEmitter<string>();

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private logService: LogServiceService) {}



  addAccount(name: string, status: string) {
    this.accounts.push({name: name , status: status});
    this.logService.logStatus(status);
  }

  updateAccount(id: number, status: string) {
    this.accounts[id].status = status;
    this.logService.logStatus(status);
  }

}
