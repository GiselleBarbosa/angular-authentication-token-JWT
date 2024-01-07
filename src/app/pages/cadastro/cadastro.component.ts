import { Component, inject } from '@angular/core';

import { CadastroService } from 'src/app/core/services/cadastro.service';
import { FormularioService } from './../../core/services/formulario.service';
import { PessoaUsuaria } from 'src/app/core/types/type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  private formularioService = inject(FormularioService);
  private cadastroService = inject(CadastroService);
  private router = inject(Router);
  
  public cadastrar() {
    const formCadastro = this.formularioService.getCadastro();

    if (formCadastro?.valid) {
      const novoCadastro = formCadastro.getRawValue() as PessoaUsuaria;
      console.log(novoCadastro);
      this.cadastroService.cadastrar(novoCadastro).subscribe({
        next: (value) => {
          alert('Cadastro realizado com sucesso!!!');
          this.router.navigateByUrl('/login');
        },
        error: (error) => {
          console.log('Erro ao realizar cadastro', error);
        },
      });
    }
  }
}
