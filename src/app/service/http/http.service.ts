import { Recipe } from './../../recipes/recipe.model';
import { RecipeService } from './../../recipes/recipe.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../url';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeData() {
    let recipe = this.recipeService.getRecipes();
    return this.http.put(API_URL, recipe);
  }

  fetchData() {
    return this.http.get<Recipe[]>(API_URL).pipe(
      map((resData) => {
        return resData.map((elem) => {
          return {
            ...elem,
            ingredients: elem.ingredients ? elem.ingredients : [],
          };
        });
      }),
      tap((res) => {
        this.recipeService.setRecipe(res);
      })
    );
  }
}
