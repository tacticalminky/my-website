import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./homepage/homepage.component').then(mod => mod.HomepageComponent)
    },
    {
        path: 'portfolio',
        loadComponent: () => import('./portfolio/portfolio.component').then(mod => mod.PortfolioComponent)
    },
    {
        path: '**',
        loadComponent: () => import('./page-not-found/page-not-found.component').then(mod => mod.PageNotFoundComponent)
    }
];
