import { Component, inject } from '@angular/core';

import { FormularioService } from './../../core/services/formulario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  private formularioService = inject(FormularioService);
  public perfilComponent = false;

  public cadastrar() {
    const formCadastro = this.formularioService.getCadastro();

    console.log('Cadastrado com sucesso', formCadastro);
  }
}
