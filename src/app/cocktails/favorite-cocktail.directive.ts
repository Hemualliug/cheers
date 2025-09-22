import { Directive, ElementRef, HostBinding, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[appFavoriteCocktail]',
  standalone: true
})
export class FavoriteCocktailDirective {
  appFavoriteCocktail = input.required<number | undefined>();
  cocktailId: string;

  private el = inject(ElementRef);

  @HostListener('click') toggleFavorite() {
    const cocktailId = this.appFavoriteCocktail()?.toString();
    if (!cocktailId) return;
    if (localStorage.getItem(cocktailId)) {
      localStorage.removeItem(cocktailId);
    } else {
      localStorage.setItem(cocktailId, '1');
    }
    this.el.nativeElement.classList.toggle('active');
  }

  @HostBinding('class.active') get active() {
    const cocktailId = this.appFavoriteCocktail()?.toString();
    return cocktailId && !!localStorage.getItem(cocktailId);
  }
}
