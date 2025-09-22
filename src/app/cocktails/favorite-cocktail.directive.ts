import { Directive, ElementRef, HostBinding, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[appFavoriteCocktail]',
  standalone: true
})
export class FavoriteCocktailDirective {
  appFavoriteCocktail = input.required<number | undefined>();
  cocktailId: string;

  private el = inject(ElementRef);

  @HostListener('click', ['$event'])
  @HostListener('keydown', ['$event'])
  handleToggleFavorite(event: MouseEvent | KeyboardEvent) {
    if (event instanceof MouseEvent) {
      this.toggleFavorite();
    } else if (event instanceof KeyboardEvent && (event.code === 'Space' || event.code === 'Enter')) {
      event.preventDefault();
      this.toggleFavorite();
    }
  }

  @HostBinding('class.active') get active() {
    const cocktailId = this.appFavoriteCocktail()?.toString();
    return cocktailId && !!localStorage.getItem(cocktailId);
  }

  private toggleFavorite(): void {
    const cocktailId = this.appFavoriteCocktail()?.toString();
    if (!cocktailId) return;
    if (localStorage.getItem(cocktailId)) {
      localStorage.removeItem(cocktailId);
    } else {
      localStorage.setItem(cocktailId, '1');
    }
    this.el.nativeElement.classList.toggle('active');
  }
}
