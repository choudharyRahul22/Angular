import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {DataStorageService} from "../shared/data-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService, private dataStorageService: DataStorageService ) {}

  ngOnInit() {

  }

  onSaveData() {
  }

  onLogout() {
    this.authService.logout();
  }

}
