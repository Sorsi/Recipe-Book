import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[];
    recipeSelected = new EventEmitter<Recipe>();

    constructor() {
        this.recipes = [
            new Recipe('A Test Recipe', 'This is a test recipe', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872'),
            new Recipe('Another Recipe', 'This is another recipe', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872'),
            new Recipe('Best Recipe', 'This is the best recipe', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872')
        ];
    }

    getRecipes() {
        return this.recipes.slice();
    }
}