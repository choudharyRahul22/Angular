import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  customerName = ['ABY', 'ASB', 'ATH', 'BCO', 'BNM', 'BOH', 'CAG', 'CAP', 'CAS', 'CTI', 'CUA', 'FBN', 'FTP', 'KBZ', 'NCZ', 'NCX', 'SER', 'SIB', 'TGE'];
  developerName = ['Rahul Choudhary', 'Sheena Gaur', 'Laxmi Porwal', 'Shishir Mittal', 'Ravi Khare', 'Vinay Mehta', 'Deepak Kumar', 'Shivam Tiwari', 'Karanbir Waraich', 'Manu Narang', 'Priyanka Rawat', 'Sameer Dahariya'];
  priority = ['P1', 'P2', 'P3'];
  severity = ['S1', 'S2', 'S3'];
  status = ['Not Started', 'In Analysis' , 'In Dev' , 'Ready For QA' , 'In QA', 'On Hold', 'Done'];
  defectType = ['Internal', 'External'];
  stepToReproduce = ['Yes', 'No'];
  followUpWithGS2 = ['Yes' , 'No'];
  portingRequired = ['Yes' , 'No'];
  complexity = ['Small', 'Medium' , 'Large' , 'Enhancement'];
  contextSwitch = ['Yes' , 'No'];
  dublicate = ['Yes' , 'No'];

  trackerForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    console.log(this.trackerForm);
  }

  private initForm() {
    let monthName = '';
    let jiraId = '';
    let customerName = '';
    let jiraDescription = '';
    let developerName = '';
    let priority = '';
    let severity = '';
    let version = '';
    let etaToFix = '';
    let defectType = '';
    let startDate = '';
    let endDate = '';
    let status = '';
    let stepToReproduce = '';
    let stepToReproduceDetailsIfAny = '';
    let followUpWithGS2 = '';
    let environmentSetup = '';
    let analysis = '';
    let devlopement = '';
    let codeReview = '';
    let providedSupportToQA = '';
    let rework = '';
    let portingRequired = '';
    let portingJiraId = '';
    let portingEffort = '';
    let reason = '';
    let totalEffort = '';
    let complexity = '';
    let contextSwitch = '';
    let monthCode = '';
    let dublicate = '';


    this.trackerForm = new FormGroup({
      'monthName': new FormControl(monthName, Validators.required),
      'jiraId': new FormControl(jiraId, Validators.required),
      'customerName': new FormControl(customerName, Validators.required),
      'jiraDescription': new FormControl(jiraDescription, Validators.required),
      'developerName': new FormControl(developerName, Validators.required),
      'priority': new FormControl(priority, Validators.required),
      'severity': new FormControl(severity, Validators.required),
      'version': new FormControl(version, Validators.required),
      'etaToFix': new FormControl(etaToFix, Validators.required),
      'defectType': new FormControl(defectType, Validators.required),
      'startDate': new FormControl(startDate, Validators.required),
      'endDate': new FormControl(endDate, Validators.required),
      'status': new FormControl(status, Validators.required),
      'stepToReproduce': new FormControl(stepToReproduce, Validators.required),
      'stepToReproduceDetailsIfAny': new FormControl(stepToReproduceDetailsIfAny, Validators.required),
      'followUpWithGS2': new FormControl(followUpWithGS2, Validators.required),
      'environmentSetup': new FormControl(environmentSetup, Validators.required),
      'analysis': new FormControl(analysis, Validators.required),
      'devlopement': new FormControl(devlopement, Validators.required),
      'codeReview': new FormControl(codeReview, Validators.required),
      'providedSupportToQA': new FormControl(providedSupportToQA, Validators.required),
      'rework': new FormControl(rework, Validators.required),
      'portingRequired': new FormControl(portingRequired, Validators.required),
      'portingJiraId': new FormControl(portingJiraId, Validators.required),
      'portingEffort': new FormControl(portingEffort, Validators.required),
      'reason': new FormControl(reason, Validators.required),
      'totalEffort': new FormControl(totalEffort, Validators.required),
      'complexity': new FormControl(complexity, Validators.required),
      'contextSwitch': new FormControl(contextSwitch, Validators.required),
      'monthCode': new FormControl(monthCode, Validators.required),
      'dublicate': new FormControl(dublicate, Validators.required),
    });
  }


}
