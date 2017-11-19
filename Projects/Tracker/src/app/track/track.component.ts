import { Component, OnInit } from '@angular/core';
import {DataStorageService} from "../shared/data-storage.service";
import {TrackerService} from "../shared/tracker.service";
import {TrackerModel} from "../Model/tracker.model";
import {forEach} from "@angular/router/src/utils/collection";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  trackers: TrackerModel[] = [];
  subscription: Subscription;
  constructor(private dataStorageService: DataStorageService, private trackerService: TrackerService) {}

  ngOnInit() {

    //this.trackers = this.trackerService.getTrackers();
      this.subscription = this.dataStorageService.getTrackers()
        .subscribe(
          (trackersData: TrackerModel[]) => {
            this.trackers = trackersData;
            /*const tracker: TrackerModel = this.trackers[0];
            console.log(tracker._analysis);*/
          }
        );
    /*this.trackerService.trackersChanged.subscribe(
      (trackersData: TrackerModel[]) => {
        this.trackers = trackersData;
        console.log("***TrackComponent***");
        console.log(this.trackers[0].complexity);
      }
    );*/


  }
}
