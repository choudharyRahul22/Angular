import {Component, OnInit} from '@angular/core';
import {AccountServiceService} from "./services/logging/account-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit{

  accounts: {name: string, status: string}[] = [];

  constructor(private accountService: AccountServiceService) {}

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }
}
