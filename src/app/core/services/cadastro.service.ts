import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PessoaUsuaria } from '../types/type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  private http = inject(HttpClient);
  private apiUrl: string = environment.apiUrl;

  cadastrar(pessoaUsuaria: PessoaUsuaria): Observable<PessoaUsuaria> {
    return this.http.post<PessoaUsuaria>(
      `${this.apiUrl}/auth/cadastro`,
      pessoaUsuaria
    );
  }
}
