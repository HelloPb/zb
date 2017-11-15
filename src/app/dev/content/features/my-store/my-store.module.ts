import { MyStoreService } from './my-store.service';
import { SharedModule } from '../../../../common/shared/shared.module';
import { MyStoreSearchResultComponent } from './my-store-search-result/my-store-search-result.component';
import { MyStoreSearchCriteriaComponent } from './my-store-search-criteria/my-store-search-criteria.component';
import { MyStoreRouterModule } from './my-store-router.module';
import { NgModule } from '@angular/core';
import { MyStoreComponent } from './my-store.component';

@NgModule({
  imports: [
    SharedModule,
    MyStoreRouterModule
  ],
  declarations: [MyStoreComponent, MyStoreSearchCriteriaComponent, MyStoreSearchResultComponent],
  providers: [ MyStoreService ]
})
export class MyStoreModule { }
