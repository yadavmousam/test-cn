import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


// used to create fake backend
import { fakeBackendProvider } from 'src/app/_helpers/fake-backend';


import { ErrorInterceptor } from 'src/app/_helpers/error.interceptor';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule} from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorInterceptor } from 'src/app/interceptor.interceptor';
import { AuthService } from 'src/app/auth.service';
import { AuthGuard } from './auth/auth.guard';

import { HomeComponent } from './home/home.component';
import { AlertComponent } from './component/alert/alert.component';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppMaterialModule } from 'src/app/app-material/app-material';
import { HeaderComponent } from './header/header.component';
import { InnerhtmlbindingComponent } from './innerhtmlbinding/innerhtmlbinding.component';
import { BypasssecurityComponent } from './bypasssecurity/bypasssecurity.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Login1Component } from './login1/login1.component';
import { CookieService } from 'ngx-cookie-service';
import { CommonResponse } from 'src/app/common-response'
import { LoginService } from './service/login.service';
import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';
import { FooterComponent } from './footer/footer.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { BlogService } from 'src/app/blog.service';
import { ContactService } from 'src/app/service/contact.service';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { ContactComponent } from './contact/contact.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog'

const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost' // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
  },
  palette: {
    popup: {
      background: '#000'
    },
    button: {
      background: '#f1d600'
    }
  },
  theme: 'edgeless',
  type: 'opt-out'
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent,
    LoginComponent,
    HeaderComponent,
    InnerhtmlbindingComponent,
    BypasssecurityComponent,
    DashboardComponent,
    Login1Component,
    FooterComponent,
    AddNewPostComponent,
    EditPostComponent,
    DeletePostComponent,
    ContactComponent,
    ContactlistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    AppMaterialModule,
    ModalModule.forRoot()
  ],
  providers: [
    AuthService,AuthGuard,CookieService,LoginService,BlogService, BsModalService,ContactService,
    // { provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true }
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },   
    // provider used to create fake backend
    fakeBackendProvider  
  ],
  bootstrap: [AppComponent],
  entryComponents:[AddNewPostComponent, DeletePostComponent, EditPostComponent,ContactComponent]

})
export class AppModule { }
