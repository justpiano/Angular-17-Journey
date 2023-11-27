import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from './home.component';
import { FeatureComponent } from '../feature/feature.component';
import { DetailComponent } from '../home/product/detail/detail.component';

export const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: DetailComponent
    },
    {
        path: 'feature',
        loadComponent: () => import('../feature/feature.component').then(m => m.FeatureComponent)
    },
    {
        path: 'product',
        component: DetailComponent
    }
];
