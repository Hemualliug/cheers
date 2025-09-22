import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-cocktail-alcoholic-chip',
  standalone: true,
  imports: [],
  templateUrl: './cocktail-alcoholic-chip.component.html',
  styleUrl: './cocktail-alcoholic-chip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CocktailAlcoholicChipComponent {
  isCocktailAlcoholic = input.required<boolean | undefined>();
}
