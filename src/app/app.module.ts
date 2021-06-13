import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
// import { LinkedInLoginProvider} from 'angularx-social-login';
import {
  // GoogleLoginProvider,
  FacebookLoginProvider,
 } from 'angularx-social-login';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authInterceptorProviders } from 'src/app/helpers/auth.interceptor';
import {AuthInterceptor} from 'src/app/helpers/auth.interceptor';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule} from '@angular/material/input';
import {MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { Login2Component } from './login2/login2.component';
import { PostListComponent } from './post-list/post-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    AdminComponent,
    ParentComponent,
    ChildComponent,
    Login2Component,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    
   
  ],
  providers: [
    
    authInterceptorProviders,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
  },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          
          // {
          //   id: GoogleLoginProvider.PROVIDER_ID,
          //   provider: new GoogleLoginProvider(
          //     '699613072714-1mtfh70geqh7e1kh8hv7rqslgnbbcbna.apps.googleusercontent.com'
              
          //   )
          // },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('767824720770238')
          },
        ]
      } as SocialAuthServiceConfig,
    }

    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
