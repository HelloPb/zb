import { StandardProductResolver } from './standard-product-resolver.service';
import { StandardProductComponent } from './standard-product.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: StandardProductComponent,
    resolve: {
      product: StandardProductResolver
    }
  },
  {
    path: ':id',
    component: StandardProductComponent,
    resolve: {
      product: StandardProductResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class StandardProductRoutingModule { }
