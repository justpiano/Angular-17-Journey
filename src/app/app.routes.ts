import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: 'main',
        loadChildren: () => import('./home/home.routes').then(m => m.homeRoutes)
    }
];
