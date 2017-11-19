import { HostInterceptor } from './common/wrappers/interceptors/http/host/host-interceptor.service';
import { SharedModule } from './common/modules/shared.module';
import { CanActivateGuardService } from './common/services/guard-activate/can-activate-guard.service';
import { AuthService } from './common/services/auth/auth.service';
import { YesNoDialogService } from './common/comps/popups/yesno/yes-no-dialog.service';
import { CountryCultureService } from './common/services/culture/country-culture/country-culture.service';
import { UserCultureService } from './common/services/culture/user-culture/user-culture.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AppResponsiveService } from './app-responsive.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ValidationService } from './dev/content/features/shared/services/validation/validation.service';
import { ProfileUsersService } from './dev/content/features/profile-users/users.service';
import { ProfileUsersResolverService } from './dev/content/features/profile-users/users-resolver.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContentModule } from './dev/content/content.module';
import { LoginComponent } from './dev/login/login.component';
import { RegisterComponent } from './dev/register/register.component';
import { PageNotFoundComponent } from './dev/page-not-found/page-not-found.component';
import { LogoutComponent } from './dev/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    LogoutComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    CanActivateGuardService,
    AuthService,
    YesNoDialogService,
    CountryCultureService,
    UserCultureService,
    ProfileUsersResolverService,
    ProfileUsersService,
    ValidationService,
    AppResponsiveService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HostInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
