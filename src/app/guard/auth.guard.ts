import { Injectable } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router, CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authservice: AuthService, private router: Router) {}
  canActivate() {
    if (this.authservice.IsLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}
