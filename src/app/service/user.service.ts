import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//  const API_URL = 'http://localhost:8080/api/test/';
  // const API_URL = 'https://jsonplaceholder.typicode.com/';

  import { environment } from '../../environments/environment';
   import { User } from '../_models';
  
  // const baseUrl = `${environment.apiUrl}/user`;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // API_KEY = 'YOUR_API_KEY';
  constructor(private http: HttpClient) { 
  }

  // getPublicContent(): Observable<any> {
  //   return this.http.get(API_URL + 'all', { responseType: 'text' });
  // }
 
  // getAdminBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'admin', { responseType: 'text' });
  // }

 
  ////-----------------------------------//
//   getAll() {
//     return this.http.get<User[]>(baseUrl);
// }

// getById(id: string) {
//     return this.http.get<User>(`${baseUrl}/${id}`);
// }

// create(params: any) {
//     return this.http.post(baseUrl, params);
// }

// update(id: string, params: any) {
//     return this.http.put(`${baseUrl}/${id}`, params);
// }

// delete(id: string) {
//     return this.http.delete(`${baseUrl}/${id}`);
// }

  
}
