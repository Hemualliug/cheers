import { Routes } from '@angular/router';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { CocktailDetailComponent } from './cocktails/cocktail-detail/cocktail-detail.component';

export const routes: Routes = [
    {
        path: 'cocktails',
        children: [
            {
                path: '',
                component: CocktailsComponent
            },
            {
                path: ':idCocktail',
                component: CocktailDetailComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'cocktails'
    }
];
