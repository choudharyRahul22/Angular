import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() newIngredient = new EventEmitter<Ingredient>();

  @ViewChild('inputText') inputText: ElementRef;
  @ViewChild('amountText') amountText: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    const name = this.inputText.nativeElement.value;
    const amount = this.amountText.nativeElement.value;
    const ingredient = new Ingredient(name, amount );
    this.newIngredient.emit(ingredient);
  }

}
