import { Injectable } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Http, Response} from "@angular/http";
import {TrackerService} from "./tracker.service";
import 'rxjs/Rx';
import {TrackerModel} from "../Model/tracker.model";

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private authService: AuthService, private trackerService: TrackerService) { }

  storeTracker() {
    const token = this.authService.getToken();
    console.log(token);
    return this.http.post('https://tracker-de34a.firebaseio.com/tracker.json?auth=' + token , this.trackerService.getTrackers())
      .map(
        (response: Response) => {
          const data  = response.json();
          return data;
        }
      );
  }

  getTrackers() {
    const token = this.authService.getToken();
    return this.http.get('https://tracker-de34a.firebaseio.com/tracker/-KzKEXDXh9OMmtsC5wzn.json?auth=' + token)
      .map(
        (response: Response) => {
          console.log(response);
          const trackers: TrackerModel[]  = response.json();
          return trackers;
        }
      );

  }

}
