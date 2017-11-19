import { Injectable } from '@angular/core';
import {TrackerModel} from "../Model/tracker.model";
import {Subject} from "rxjs/Subject";

@Injectable()
export class TrackerService {

  trackersChanged = new Subject<TrackerModel[]>();

  public trackerList: TrackerModel[] = [];

  constructor() { }

  saveTracker(tracker: TrackerModel) {
    console.log(this.trackerList);
    this.trackerList.push(tracker);
    console.log(this.trackerList);
    this.trackersChanged.next(this.trackerList);
  }

  getTrackers() {
    return this.trackerList;
  }

  setTrackers(trackers: TrackerModel[]) {
    this.trackerList = trackers;
    this.trackersChanged.next(this.trackerList);
  }

}
