import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from '../../environments/environment';
// const baseUrl = `${environment.apiUrl}/user`;
const AUTH_API = 'https://jsonplaceholder.typicode.com/todos/1';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }


  login(username?: string, password?: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    });
  }

  register(username?: string, email?: string, password?: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    });
  }

 
  
}

