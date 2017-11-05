import { ProductSearchComponent } from './product-search/product-search.component';
import { ProfileProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: ProfileProductsComponent,
    children: [
      {
        path: '', redirectTo: 'search'
      },
      {
        path: 'search',
        loadChildren: 'app/dev/content/features/products/product-search/product-search.module#ProductSearchModule'
      },
      {
        path: 'standard',
        loadChildren: 'app/dev/content/features/products/add-edit-product/standard-product/standard-product.module#StandardProductModule'
      },
      {
        path: 'specific',
        loadChildren: 'app/dev/content/features/products/add-edit-product/specific-product/specific-product.module#SpecificProductModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProfileProductsRoutingModule { }
