import { Component, Input, OnInit, inject } from '@angular/core';
import { Observable, map, startWith } from 'rxjs';

import { FormControl } from '@angular/forms';
import { UnidadeFederativa } from 'src/app/core/types/type';
import { UnidadeFederativaService } from 'src/app/core/services/unidade-federativa.service';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss'],
})
export class DropdownUfComponent implements OnInit {
  private unidadeFederativaService = inject(UnidadeFederativaService);

  @Input() public label: string = '';
  @Input() public iconePrefixo: string = '';
  @Input() public placeholder: string = '';
  @Input() public control!: FormControl;

  public unidadesFederativas: UnidadeFederativa[] = [];

  public filteredOptions$?: Observable<UnidadeFederativa[]>;

  public ngOnInit(): void {
    this.unidadeFederativaService.listar().subscribe((dados) => {
      this.unidadesFederativas = dados;
      console.log(this.unidadesFederativas);
    });
    this.filteredOptions$ = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this.filtrarUfs(value))
    );
  }

  public filtrarUfs(value: string | UnidadeFederativa): UnidadeFederativa[] {
    const nomeUf = typeof value === 'string' ? value : value?.nome;
    const valorFiltrado = nomeUf?.toLowerCase();
    const result = this.unidadesFederativas.filter((estado) =>
      estado.nome.toLowerCase().includes(valorFiltrado)
    );
    return result;
  }

  public displayFn(estado: UnidadeFederativa): string {
    return estado && estado.nome ? estado.nome : '';
  }
}
