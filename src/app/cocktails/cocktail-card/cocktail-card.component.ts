import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Cocktail } from '../cocktails.model';
import { FavoriteCocktailDirective } from "../favorite-cocktail.directive";
import { RouterLink } from "@angular/router";
import { PipeSeparatedListPipe } from '../pipe-separated-list.pipe';
import { CocktailAlcoholicChipComponent } from '../cocktail-alcoholic-chip/cocktail-alcoholic-chip.component';

@Component({
  selector: 'app-cocktail-card',
  standalone: true,
  imports: [FavoriteCocktailDirective, RouterLink, PipeSeparatedListPipe, CocktailAlcoholicChipComponent],
  templateUrl: './cocktail-card.component.html',
  styleUrl: './cocktail-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CocktailCardComponent {
  cocktail = input<Cocktail>();
}
