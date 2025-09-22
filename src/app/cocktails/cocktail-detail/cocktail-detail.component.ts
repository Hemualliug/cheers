import { Cocktail } from './../cocktails.model';
import { CocktailService } from '../cocktail.service';
import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CocktailAlcoholicChipComponent } from '../cocktail-alcoholic-chip/cocktail-alcoholic-chip.component';
import { FavoriteCocktailDirective } from '../favorite-cocktail.directive';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-cocktail-detail',
  standalone: true,
  imports: [CocktailAlcoholicChipComponent, FavoriteCocktailDirective],
  templateUrl: './cocktail-detail.component.html',
  styleUrl: './cocktail-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CocktailDetailComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private cocktailService = inject(CocktailService);

  cocktailDetail: WritableSignal<Cocktail | null> = signal(null);
  destroy$ = new Subject<void>();

  ngOnInit(): void {
    let cocktailId = Number(this.activatedRoute.snapshot.params['idCocktail']);
    if (cocktailId) {
      this.cocktailService.getCocktailDetail(cocktailId).pipe(takeUntil(this.destroy$)).subscribe({
        next: (detail) => {
          this.cocktailDetail.set(detail);
        }
      });
    }
  }

  onBack() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
