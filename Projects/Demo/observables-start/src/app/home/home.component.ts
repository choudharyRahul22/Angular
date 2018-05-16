import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Observer, Subscription} from "rxjs";
import {UserService} from "../user-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

 /* numberObservableSubscription: Subscription;
  myObservableSubscription: Subscription;*/



  constructor() { }

  ngOnInit() {

    /*const numberObservable = Observable.interval(1000);
    this.numberObservableSubscription = numberObservable.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const myObservable = Observable.create(
      (observer: Observer<string>) => {
        setTimeout(() => {
          observer.next('first package');
        },2000);
        setTimeout(() => {
          observer.next('second package');
        },4000);
        /!*setTimeout(() => {
          observer.error('error while receving package');
        },6000);*!/
        setTimeout(() => {
          observer.complete();
        },6000);
        setTimeout(() => {
          observer.next('third package');
        },8000);

      }
    );

   this.myObservableSubscription = myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => { console.log('completed'); }
    );*/

  }


  ngOnDestroy() {
    /*this.numberObservableSubscription.unsubscribe();
    this.myObservableSubscription.unsubscribe();*/
  }

}
