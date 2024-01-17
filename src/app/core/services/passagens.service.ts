import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resultado } from '../types/type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PassagensService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  public getPassagens(search: any): Observable<Resultado> {
    const params = search;
    return this.http.get<Resultado>(this.apiUrl + '/passagem/search', {
      params,
    });
  }
}
