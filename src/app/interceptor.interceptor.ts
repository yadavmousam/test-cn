import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/observable/throw'
// import 'rxjs/add/operator/catch';
// import { catchError } from 'rxjs/operators';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // if(localStorage.getItem('access-token') != null) 
    // {
    //    const token =  localStorage.getItem('access-token');
    // // if the token is  stored in localstorage add it to http header
    // const headers = new HttpHeaders().set("access-token",  'Bearer ' + token);
    //    //clone http to the custom AuthRequest and send it to the server 
    // const AuthRequest = request.clone( { headers: headers});
    // return next.handle(AuthRequest)
    //    }else {
         return next.handle(request);
       
      }
}
