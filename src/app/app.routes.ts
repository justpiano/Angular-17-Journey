import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => AppComponent
    },
    {
        path: '/main',
        loadChildren: () => import('./home/home.routes').then(m => m.homeRoutes)
    }
];
