export class Ingredient {

  /*
      Behind the scen this will create the global variables name and amount
      Also whenever this class get instanciated this will assign the param to global variables.

      Typescript is just reducing the amount of code we going to write.
   */

  constructor(public name: string , public amount: number) {}
}
