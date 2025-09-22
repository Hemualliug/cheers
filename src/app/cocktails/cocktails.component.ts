import { Component, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { CocktailService } from './cocktail.service';
import { Cocktail } from './cocktails.model';
import { CocktailCardComponent } from './cocktail-card/cocktail-card.component';
import { CocktailsFilterComponent } from './cocktails-filter/cocktails-filter.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-cocktails',
  standalone: true,
  imports: [CocktailCardComponent, CocktailsFilterComponent],
  templateUrl: './cocktails.component.html',
  styleUrl: './cocktails.component.scss'
})
export class CocktailsComponent implements OnInit, OnDestroy {
  cocktails: WritableSignal<Cocktail[]> = signal([]);
  displayedCocktails: WritableSignal<Cocktail[]> = signal([]);
  destroy$ = new Subject<void>();

  private cocktailService = inject(CocktailService);

  ngOnInit(): void {
    this.cocktailService.getCocktails().pipe(takeUntil(this.destroy$)).subscribe({
      next: (cocktails) => {
        this.cocktails.set(cocktails);
        this.displayedCocktails.set([...cocktails]);
      }
    })
  }

  filterCocktails(cocktailName: string | null | undefined) {
    if (!cocktailName) {
      this.displayedCocktails.set([...this.cocktails()]);
    } else {
      this.displayedCocktails.set(this.cocktails().filter((cocktail) => {
        return cocktail.name?.toLowerCase().includes(cocktailName);
      }))
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
