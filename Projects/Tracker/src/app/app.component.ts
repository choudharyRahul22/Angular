import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    ngOnInit() {
      firebase.initializeApp({
        apiKey: "AIzaSyAwP1cgP67RCcbveO_MLdxoLcx7Y9NtcwA",
        authDomain: "tracker-20aae.firebaseapp.com",
      });
    }

}
