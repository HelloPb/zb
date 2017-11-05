import { MyStoreSearchResultComponent } from './my-store-search-result/my-store-search-result.component';
import { MyStoreSearchCriteriaComponent } from './my-store-search-criteria/my-store-search-criteria.component';
import { MyStoreRouterModule } from './my-store-router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyStoreComponent } from './my-store.component';

@NgModule({
  imports: [
    CommonModule,
    MyStoreRouterModule
  ],
  declarations: [MyStoreComponent, MyStoreSearchCriteriaComponent, MyStoreSearchResultComponent]
})
export class MyStoreModule { }
