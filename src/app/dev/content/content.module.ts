import { SharedModule } from '../../common/shared/shared.module';
import { MenuModule } from './menu/menu.module';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { ContentRoutingModule } from './content-routing.module';
import { ContentAreaComponent } from './content-area.component';

@NgModule({
  imports: [
    SharedModule,
    MenuModule,
    ContentRoutingModule
  ],
  declarations: [ContentAreaComponent]
})
export class ContentModule { }
