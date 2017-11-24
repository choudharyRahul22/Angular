import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TrackerModel} from "../Model/tracker.model";
import {TrackerService} from "../shared/tracker.service";
import {DataStorageService} from "../shared/data-storage.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  defaultMonthName = {monthId: 1 , monthName: 'Jan'};
  monthName = [{monthId: 1 , monthName: 'Jan'}, {monthId: 2 , monthName: 'Feb'}, {monthId: 3 , monthName: 'Mar'}, {monthId: 4 , monthName: 'Apr'}, {monthId: 5 , monthName: 'May'}, {monthId: 6 , monthName: 'Jun'}, {monthId: 7 , monthName: 'Jul'}, {monthId: 8 , monthName: 'Aug'}, {monthId: 9 , monthName: 'Sep'}, {monthId: 10 , monthName: 'Oct'}, {monthId: 11 , monthName: 'Nov'}, {monthId: 12 , monthName: 'Dec'}];
  customerName = ['ABY', 'ASB', 'ATH', 'BCO', 'BNM', 'BOH', 'CAG', 'CAP', 'CAS', 'CTI', 'CUA', 'FBN', 'FTP', 'KBZ', 'NCZ', 'NCX', 'SER', 'SIB', 'TGE'];
  defaultDeveloperName = {empId: 103605 , name: 'Rahul Choudhary'};
  developerName = [{empId: 103605 , name: 'Rahul Choudhary'}, {empId: 103606 , name: 'Sheena Gaur'}, {empId: 103607 , name: 'Laxmi Porwal'}, {empId: 103608 , name: 'Shishir Mittal'}, {empId: 103609 , name: 'Ravi Khare'}, {empId: 103610 , name: 'Vinay Mehta'}, {empId: 103611 , name: 'Deepak Kumar'}, {empId: 103612 , name: 'Shivam Tiwari'}, {empId: 103613 , name: 'Karanbir Waraich'}, {empId: 103614 , name: 'Manu Narang'}, {empId: 103615 , name: 'Priyanka Rawat'}, {empId: 103616 , name: 'Sameer Dhaiya'}];
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

  constructor(private trackerService: TrackerService,
              private dataStorageService: DataStorageService,
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {

    const newTracker = new TrackerModel(
      this.trackerForm.value['monthName'],
      this.trackerForm.value['jiraId'],
      this.trackerForm.value['customerName'],
      this.trackerForm.value['jiraDescription'],
      this.trackerForm.value['developerName'],
      this.trackerForm.value['priority'],
      this.trackerForm.value['severity'],
      this.trackerForm.value['version'],
      this.trackerForm.value['etaToFix'],
      this.trackerForm.value['defectType'],
      this.trackerForm.value['startDate'],
      this.trackerForm.value['endDate'],
      this.trackerForm.value['status'],
      this.trackerForm.value['stepToReproduce'],
      this.trackerForm.value['stepToReproduceDetailsIfAny'],
      this.trackerForm.value['followUpWithGS2'],
      this.trackerForm.value['environmentSetup'],
      this.trackerForm.value['analysis'],
      this.trackerForm.value['devlopement'],
      this.trackerForm.value['codeReview'],
      this.trackerForm.value['providedSupportToQA'],
      this.trackerForm.value['rework'],
      this.trackerForm.value['portingRequired'],
      this.trackerForm.value['portingJiraId'],
      this.trackerForm.value['portingEffort'],
      this.trackerForm.value['reason'],
      this.trackerForm.value['totalEffort'],
      this.trackerForm.value['complexity'],
      this.trackerForm.value['contextSwitch'],
      this.trackerForm.value['monthCode'],
      this.trackerForm.value['dublicate'],
    );

    console.log(newTracker);
    this.trackerService.saveTracker(newTracker);

    this.dataStorageService.storeTracker().subscribe(
        (data: any) => {
          console.log(data);
        }
      );

   // this.onClear();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onClear() {
    this.trackerForm.reset();
  }
  
  onUpdate() {}


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
