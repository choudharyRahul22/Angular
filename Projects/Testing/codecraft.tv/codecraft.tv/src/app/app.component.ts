import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() { }




  workAreaSelectionForm: FormGroup;

  ngOnInit() {
    this.initWorkAreaSelectionForm();

  }



  initWorkAreaSelectionForm() {
    this.workAreaSelectionForm = new FormGroup({
      queueName: new FormControl('OC', Validators.required),
      businessName: new FormControl(''),
      cellName: new FormControl(''),
      sourceName: new FormControl(''),
      savePresetFlag: new FormControl(false)
    });
  }



}
