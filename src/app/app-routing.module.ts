import { NgModule } from '@angular/core';
// import { AuthGuard } from './auth/auth.guard';
import { AuthGuard } from 'src/app/service/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { Login1Component } from './login1/login1.component';
import { InnerhtmlbindingComponent } from './innerhtmlbinding/innerhtmlbinding.component';
import { BypasssecurityComponent } from './bypasssecurity/bypasssecurity.component';
const usersModule = () => import('./user/user.module').then(x => x.UserModule)

const routes: Routes = [
//  { path: '', component: Login1Component },
//   { path: 'logins', component: Login1Component },
 
   { path: '', component: HomeComponent },
   { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'user', loadChildren: usersModule },
  { path: 'login', component: LoginComponent },
  { path: 'logins', component: Login1Component },
  { path: '', component: ContactComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'innerhtml', component: InnerhtmlbindingComponent },
  { path: 'bypasssecurity', component: BypasssecurityComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
