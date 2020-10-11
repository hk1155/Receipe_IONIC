import { Injectable } from '@angular/core';
import { Recipe } from './recipe.modal';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title1: 'Hagimaru',
      imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
      ingredints: ['pogo', 'cable', 'power'],
      name: 'ABC'
    },
    {
      id: 'r2',
      title1: 'Maggi',
      imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
      ingredints: ['maggie', 'water', 'maggi masala'],
      name: 'ABC'
    },
    {
      id: 'r3',
      title1: 'Doremon',
      imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/girl.png',
      ingredints: ['maggie', 'water', 'maggi masala'],
      name: 'ABC'
    },
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  geteRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      }),
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
