import { RecipeService } from './../recipes/recipe.service';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpService } from '../service/http/http.service';
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor(
    private http: HttpService,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {}

  onSaveData() {
    this.http.storeData().subscribe((res: any) => {
      console.log('saveData', res);
    });
    catchError((e) => {
      return throwError(e);
    });
  }

  onFethcData() {
    this.http.fetchData().subscribe((res: any) => {
      this.recipeService.setRecipe(res);
    });
    catchError((e) => {
      return throwError(e);
    });
  }
}
