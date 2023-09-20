import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
const apiurl = environment.APIURL + '/api/Token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  refreshTokenInterval: any;

  constructor(private http: HttpClient, private router: Router) {}

  //log in by admin

  proceedLogin(usercred: any): Observable<any> {
    return this.http.post<any>(apiurl + '/login', usercred);
  }

  anyUserLogin(anyuserlogin: any) {
    return this.http.post<any>(apiurl + '/login', anyuserlogin);
  }

  IsLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  logout(): void {
    localStorage.removeItem('token');
    setTimeout(() => {
      clearInterval(this.refreshTokenInterval);
      this.refreshTokenInterval = null;
      this.router.navigate(['/auth/login']);
    }, 1000);
  }
}
