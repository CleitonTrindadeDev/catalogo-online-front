import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/products/products.component')
                .then(m => m.ProductsComponent)
    },
    {
        path: 'product/:id',
        loadComponent: () =>
            import('./pages/categorys/categorys.component')
                .then(m => m.CategorysComponent)
    },
    { path: '**', redirectTo: '' }
];
