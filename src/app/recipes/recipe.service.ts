import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
@Injectable()
export class RecipeService {
    private recipes: Recipe[];
    recipeSelected = new EventEmitter<Recipe>();

    constructor(
        private shoppingListService: ShoppingListService,
    ) {
        this.recipes = [
            new Recipe(
                'Classic Burger',
                'This is a classic burger recipe',
                'assets/images/burger.jpeg',
                []),
            new Recipe(
                'Delicious Pizza Recipe',
                'This is another recipe',
                'assets/images/pizza.jpg',
                [
                    new Ingredient('cheese', 3),
                    new Ingredient('tomato', 5),
                    new Ingredient('egg', 2),
                ]),
            new Recipe(
                'Wiener Schnitzel',
                'This is the best recipe',
                'assets/images/wiener-schnitzel.jpg',
                [
                    new Ingredient('meat', 1),
                    new Ingredient('French Fries', 20)
                ])
        ];
    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}