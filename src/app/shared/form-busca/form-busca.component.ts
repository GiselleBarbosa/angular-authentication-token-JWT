import { Component, EventEmitter, Output, inject } from '@angular/core';

import { FormBuscaService } from 'src/app/core/services/form-busca.service';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss'],
})
export class FormBuscaComponent {
  public formBuscaService = inject(FormBuscaService);

  @Output() public realizarBusca = new EventEmitter();

  public buscar() {
    const formBuscaValue = this.formBuscaService.formBusca.value;
    this.realizarBusca.emit(formBuscaValue);
  }
}
