export class Recipe {

  // Global Variables For Recipe
  public name: string;
  public description: string;
  public imagePath: string;

  // Constructor
  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }

}
