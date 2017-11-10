import {Ingredient} from "../shared/ingredient.model";

export class Recipe {

  // Global Variables For Recipe
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  // Constructor
  constructor(name: string, description: string, imagePath: string , ingredients: Ingredient[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }

}
