import { Component, OnInit, inject } from '@angular/core';
import { DadosBusca, Passagem } from 'src/app/core/types/type';

import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { PassagensService } from 'src/app/core/services/passagens.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss'],
})
export class BuscaComponent implements OnInit {
  private passagensService = inject(PassagensService);
  private formBuscaService = inject(FormBuscaService);

  public passagens: Passagem[] = [];

  public ngOnInit(): void {
    const buscaPadrao = {
      data: new Date().toISOString,
      pagina: 1,
      porPagina: 25,
      somenteIda: false,
      passageirosAdultos: 1,
      tipo: 'Executiva',
    };

    const busca = this.formBuscaService.formEstaValido
      ? this.formBuscaService.obterDadosBusca()
      : buscaPadrao;

    this.passagensService.getPassagens(busca).subscribe((response) => {
      console.log(response);
      this.passagens = response.resultado;
    });
  }

  public busca(event: DadosBusca) {
    this.passagensService.getPassagens(event).subscribe((response) => {
      console.log(response);
      this.passagens = response.resultado;
    });
  }
}
