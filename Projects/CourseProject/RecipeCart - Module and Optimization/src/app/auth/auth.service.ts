import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {ActivatedRoute, Router} from "@angular/router";

@Injectable()
export class AuthService {

  token: string;
  constructor(private router: Router, private route: ActivatedRoute) { }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(["/"]);
          firebase.auth().currentUser.getToken()
            .then(
              (tokenRec: string) => {
                this.token = tokenRec;
              }
            );
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  getToken() {
    firebase.auth().currentUser.getToken().
    then(
      (tokenRec: string) => {
        this.token = tokenRec;
      }
    );
    return this.token;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(["/signin"]);
  }

  isAuthenticated() {
    return this.token != null;
  }

}
