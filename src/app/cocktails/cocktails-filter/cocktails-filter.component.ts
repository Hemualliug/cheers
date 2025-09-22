import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-cocktails-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cocktails-filter.component.html',
  styleUrl: './cocktails-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CocktailsFilterComponent implements OnInit, OnDestroy {
  cocktailNameEntered = output<string | null | undefined>();

  cocktailNameFc = new FormControl('');
  destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.cocktailNameFc.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((name) => {
        this.cocktailNameEntered.emit(name?.toLowerCase());
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
