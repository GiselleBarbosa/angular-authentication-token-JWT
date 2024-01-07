import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  public salvarToken(token: string): void {
    return localStorage.setItem(KEY, token);
  }

  public excluirToken(): void {
    localStorage.removeItem(KEY);
  }

  public retornarToken(): string  {
    return localStorage.getItem(KEY) ?? '';
  }

  public possuiToken(): boolean {
    return !!this.retornarToken();
  }
}
