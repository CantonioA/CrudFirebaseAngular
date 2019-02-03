import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroe/heroes.component';
import { EditComponent } from './components/heroe/edit/edit.component';



const APP_ROUTES: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: EditComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'heroes' }
];

export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES ) ;