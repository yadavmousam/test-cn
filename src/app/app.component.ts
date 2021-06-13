import { Component } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { Router } from '@angular/router';
import { TokenStorageService } from './service/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'test2';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string
  public user: any= SocialUser
  loggedIn: boolean=true;

  //  loggedIn:any boolean=true;
  // constructor(private authService: AuthService) { }

  // signInWithFB(): void {
  //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  
  // } 
  // signOut(): void {
  //   this.authService.signOut();
  // }

  // ngOnInit() {
   
  //   this.authService.authState.subscribe((user) => {
  //     this.user = user;
    
  //     this.loggedIn = (user != null);
  //   });
  // }

  constructor(private authService: SocialAuthService,private router: Router,private tokenStorageService: TokenStorageService,
    ) {
      
     }

     ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      
      this.user = user;
      this.loggedIn = (user != null);
    });

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      // this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }


    
  }

  // signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData)=>{
  //     this.user=userData;
  //   });
  // }

  // signInWithLinkedin(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData)=>{
  //     this.user=userData;
  //   });
  // }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData)=>{
      this.user=userData;
    });;
  }

 

  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }



}
