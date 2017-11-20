import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {YourFindingsModel} from "../Model/your-findings.model";

@Component({
  selector: 'app-your-findings',
  templateUrl: './your-findings.component.html',
  styleUrls: ['./your-findings.component.css']
})
export class YourFindingsComponent implements OnInit {

  @ViewChild('f') signupForm: NgForm;
  note = '';
  customerName = ['ABY', 'ASB', 'ATH', 'BCO', 'BNM', 'BOH', 'CAG', 'CAP', 'CAS', 'CTI', 'CUA', 'FBN', 'FTP', 'KBZ', 'NCZ', 'NCX', 'SER', 'SIB', 'TGE'];

  findings: YourFindingsModel;

  yourFindings: YourFindingsModel[] = [];
  submitted = false;
  date = new Date();

  /*onSubmit(form: NgForm) {
    console.log(form);
  }*/

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.signupForm);
    this.submitted = true;
    this.findings = new YourFindingsModel(this.signupForm.value.jiraId, this.signupForm.value.customerName, this.signupForm.value.note);
    this.yourFindings.push(this.findings);

    this.signupForm.reset();
  }
}
