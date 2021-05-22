import { RecipeService } from './../../recipes/recipe.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../url';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeData() {
    let recipe = this.recipeService.getRecipes();
    return this.http.put(API_URL, recipe);
  }
}
