import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { AuthResponse } from '../types/type';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  private userService = inject(UserService);
  private apiUrl = environment.apiUrl;

  private http = inject(HttpClient);

  public autenticar(
    email: string,
    senha: string
  ): Observable<HttpResponse<AuthResponse>> {
    return this.http
      .post<AuthResponse>(
        `${this.apiUrl}/auth/login`,
        {
          email,
          senha,
        },
        { observe: 'response' }
      )
      .pipe(
        tap((response) => {
          const authToken = response.body?.access_token || '';
          this.userService.salvarToken(authToken);
        })
      );
  }
}
