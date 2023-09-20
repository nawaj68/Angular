import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthUserInterceptor implements HttpInterceptor {

constructor(){}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
       const authtoken = localStorage.getItem('token');

       if(authtoken){
        const authRequest = req.clone({
            headers:req.headers.set('Authorization','Bearer ' + authtoken)
        });
        return next.handle(authRequest);
       }
       else{
        const authRequest = req.clone();
        return next.handle(authRequest);
       }
    }
}