import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

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

  recipeForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
