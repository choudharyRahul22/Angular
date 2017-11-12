import {Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingService} from "../shopping-list/shopping.service";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Dal Bati' ,
      'Dal Bhati is famous recipe of MP',
      'https://www.ndtv.com/cooks/images/iStock_50367092_SMALL%20%281%29.jpg',
      [
        new Ingredient('Floor' , 1),
        new Ingredient('Dal' , 1)
      ]),
    new Recipe('Kadhai Paneer' ,
      'Kadhai Paneer is famous recipe of UP',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--488691_11.jpg?itok=ExaTspz1',
      [
        new Ingredient('Paneer' , 1),
        new Ingredient('Masala' , 2)
      ])
  ];

  constructor(private shoppingListService: ShoppingService) {}

  getRecipes() {
    // we only get copy of array
    return this.recipes.slice();
  }

  getRecipeById(index: number) {
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
