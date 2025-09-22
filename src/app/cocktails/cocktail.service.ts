import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from './cocktails.model';
import { apiPath } from '../shared/const/api-path';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private readonly getCocktailsUrl = apiPath.endpoints.cocktails.get;
  private readonly getCocktailDetailUrl = apiPath.endpoints.cocktails.detail.get;

  private http = inject(HttpClient);

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>(this.getCocktailsUrl);
  }

  getCocktailDetail(cocktailId: number): Observable<Cocktail> {
    let url = this.getCocktailDetailUrl;
    url = url.replace('{id}', cocktailId.toString())
    return this.http.get<Cocktail>(url);
  }
}
