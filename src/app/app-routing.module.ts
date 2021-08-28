import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  { 
    path: 'home', 
    loadChildren: () => import('./components/home/home.module')
    .then(m => m.HomeModule) 
  },
  { 
    path: 'product-detail/:id', 
    loadChildren: () => import('./components/products/product-detail/product-detail.module')
    .then(m => m.ProductDetailModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
