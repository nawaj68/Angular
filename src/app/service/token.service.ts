import { Injectable } from '@angular/core';

const Access_Token = 'access_token';
const Refresh_Token = 'refress_token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  getAccessToken(): string | null {
    return localStorage.getItem(Access_Token);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(Refresh_Token);
  }

  saveAccessToken(accesstoken: string): void {
    localStorage.setItem(Access_Token, accesstoken);
  }

  saveRefreshToken(refreshtoken: string): void {
    localStorage.setItem(Refresh_Token, refreshtoken);
  }

  removeAccessToken(): void {
    localStorage.removeItem(Access_Token);
  }

  removeRefreshToken(): void {
    localStorage.removeItem(Refresh_Token);
  }
}
