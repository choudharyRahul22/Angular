import { Injectable } from '@angular/core';

@Injectable()
export class LogServiceService {

  constructor() { }

  logStatus(status: string) {
    console.log('A server status changed, new status: ' + status);
  }

}
