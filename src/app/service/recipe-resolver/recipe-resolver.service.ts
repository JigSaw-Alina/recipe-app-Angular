import { RecipeService } from './../../recipes/recipe.service';
import { Recipe } from './../../recipes/recipe.model';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeResolverService implements Resolve<Recipe[]> {
  constructor(
    private http: HttpService,
    private recipeService: RecipeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let recipe = this.recipeService.getRecipes();
    if (recipe.length === 0) {
      return this.http.fetchData();
    } else {
      return recipe;
    }
  }
}
