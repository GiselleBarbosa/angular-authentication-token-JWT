import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable, inject } from '@angular/core';

import { PessoaUsuaria } from '../types/type';
import { TokenService } from './token.service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private tokenService = inject(TokenService);
  private userSubject = new BehaviorSubject<PessoaUsuaria | null>(null);
  public readonly user$ = this.userSubject.asObservable();

  constructor() {
    if (this.tokenService.possuiToken()) {
      this.decodificarJWT();
    }
  }

  public decodificarJWT() {
    const token = this.tokenService.retornarToken();
    const user = jwt_decode(token) as PessoaUsuaria;
    this.userSubject.next(user);
  }

  /*  public retornarUsuario(): Observable<PessoaUsuaria | null> {
    return this.userSubject.asObservable();
  } */

  public salvarToken(token: string) {
    this.tokenService.salvarToken(token);
    this.decodificarJWT();
  }

  public logout() {
    this.tokenService.excluirToken();
    this.userSubject.next(null);
  }

  public estaLogado() {
    return this.tokenService.possuiToken();
  }
}
