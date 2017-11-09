import { LogoutComponent } from './dev/logout/logout.component';
import { PageNotFoundComponent } from './dev/page-not-found/page-not-found.component';
import { RegisterComponent } from './dev/register/register.component';
import { LoginComponent } from './dev/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const route: Routes = [
  {
    path: '', redirectTo: 'content', pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    outlet: 'popup'
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'content',
    loadChildren: 'app/dev/content/content.module#ContentModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(route, { useHash: true, enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
