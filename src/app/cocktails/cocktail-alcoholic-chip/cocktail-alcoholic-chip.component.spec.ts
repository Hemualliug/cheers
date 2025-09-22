import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailAlcoholicChipComponent } from './cocktail-alcoholic-chip.component';

describe('CocktailAlcoholicChipComponent', () => {
  let component: CocktailAlcoholicChipComponent;
  let fixture: ComponentFixture<CocktailAlcoholicChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailAlcoholicChipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CocktailAlcoholicChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
