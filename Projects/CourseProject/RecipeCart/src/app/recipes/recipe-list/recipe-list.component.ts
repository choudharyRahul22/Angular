import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe' , 'Test Description', 'https://www.ndtv.com/cooks/images/iStock_50367092_SMALL%20%281%29.jpg'),
    new Recipe('Test Recipe' , 'Test Description', 'https://www.ndtv.com/cooks/images/iStock_50367092_SMALL%20%281%29.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
