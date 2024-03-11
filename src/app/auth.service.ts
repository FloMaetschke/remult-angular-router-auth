import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo, remult } from 'remult';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  async login(username: string) {
    try {
      remult.user = await firstValueFrom(
        this.http.post<UserInfo>('/api/signIn', { username })
      );
      this.router.navigateByUrl('');
    } catch {
      alert('Login failed');
    }
  }

  async logout() {
    try {
      await firstValueFrom(this.http.post('/api/signOut', {}));
      remult.user = undefined;
      this.router.navigateByUrl('');
    } catch {
      alert('Logout failed');
    }
  }
}
