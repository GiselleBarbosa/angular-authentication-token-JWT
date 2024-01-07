import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';
import { PessoaUsuaria } from '../types/type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  private http = inject(HttpClient);
  private apiUrl: string = environment.apiUrl;

  public cadastrar(pessoaUsuaria: PessoaUsuaria): Observable<PessoaUsuaria> {
    return this.http.post<PessoaUsuaria>(
      `${this.apiUrl}/auth/cadastro`,
      pessoaUsuaria
    );
  }

  public buscarCadastro(token: string): Observable<PessoaUsuaria> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`, {
      headers,
    });
  }

  public editarCadastro(
    pessoaUsuaria: PessoaUsuaria,
    token: string
  ): Observable<PessoaUsuaria> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.patch<PessoaUsuaria>(
      `${this.apiUrl}/auth/perfil`,
      pessoaUsuaria,
      {
        headers,
      }
    );
  }
}
