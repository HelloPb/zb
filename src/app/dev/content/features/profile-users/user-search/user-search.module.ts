import { UserSearchRoutingModule } from './user-search-routing.module';
import { UserSearchComponent } from './user-search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSearchCriteriaComponent } from './user-search-criteria/user-search-criteria.component';
import { UserSearchResultComponent } from './user-search-result/user-search-result.component';

@NgModule({
  imports: [
    CommonModule,
    UserSearchRoutingModule
  ],
  declarations: [UserSearchComponent, UserSearchCriteriaComponent, UserSearchResultComponent]
})
export class UserSearchModule { }
