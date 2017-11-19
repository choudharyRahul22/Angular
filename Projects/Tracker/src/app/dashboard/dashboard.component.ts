import { Component, OnInit } from '@angular/core';
import {TrackerModel} from "../Model/tracker.model";
import {Subscription} from "rxjs/Subscription";
import {DataStorageService} from "../shared/data-storage.service";
import {TrackerService} from "../shared/tracker.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ngOnInit() {

  }

}
