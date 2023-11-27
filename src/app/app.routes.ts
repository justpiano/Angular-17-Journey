import { Routes } from '@angular/router';
import { DetailComponent } from './home/product/detail/detail.component';

export const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.routes').then(m => m.homeRoutes)
    },
    {
        path: 'detail/:detailId',
        component: DetailComponent
    },
];
