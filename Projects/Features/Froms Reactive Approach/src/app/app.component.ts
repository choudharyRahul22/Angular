import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {reject} from "q";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUserames = ['rahul', 'ravi'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'username' : new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email' : new FormControl(null,[ Validators.required,  Validators.email] , this.forbiddenEmail.bind(this))
      }),
      'gender' : new FormControl('male'),
      'hobbies' : new FormArray([])
    });

    this.signupForm.valueChanges.subscribe(
      (value) => {console.log(value)}
    );

    this.signupForm.statusChanges.subscribe(
      (status) => {console.log(status)}
    );

    this.signupForm.setValue({
      'userData': {
        'username' : 'Rahul_Choudhary',
        'email': 'rahul@gmail.com'
      },
      'gender': 'male',
      'hobbies' : []
    });

    this.signupForm.patchValue({
      'userData': {
        'username' : 'Shalu_Choudhary',
      },
    });

  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby() {
    console.log('button clicked');
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): {[s: string] : boolean} {
    if (this.forbiddenUserames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'rahulchaudhary22051990@gmail.com') {
            return resolve({'emailIsForbidden': true});
          } else {
            return resolve(null);
          }
        }, 1500);
      }
    );
    return promise;
  }
}
