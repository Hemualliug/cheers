import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from './cocktails.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private http = inject(HttpClient);

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>('http://localhost:4200/cocktails');
  }

  getCocktailDetail(cocktailId: number): Observable<Cocktail> {
    return this.http.get<Cocktail>('http://localhost:4200/cocktails/' + cocktailId);
  }
}
