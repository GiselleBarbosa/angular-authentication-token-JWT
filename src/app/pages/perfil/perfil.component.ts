import { Component, OnInit, inject } from '@angular/core';

import { CadastroService } from 'src/app/core/services/cadastro.service';
import { FormGroup } from '@angular/forms';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { PessoaUsuaria } from 'src/app/core/types/type';
import { Router } from '@angular/router';
import { TokenService } from './../../core/services/token.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  private tokenService = inject(TokenService);
  private cadastroService = inject(CadastroService);
  private formularioService = inject(FormularioService);
  private router = inject(Router);

  public titulo = 'Olá, ';
  public textoBotao = 'ATUALIZAR';
  public perfilComponent = true;

  public token = '';
  public nome = '';
  public cadastro!: PessoaUsuaria;
  form!: FormGroup | null;

  public ngOnInit(): void {
    this.token = this.tokenService.retornarToken();
    this.cadastroService.buscarCadastro(this.token).subscribe((cadastro) => {
      this.cadastro = cadastro;
      this.nome = this.cadastro.nome;
      this.carregarFormulario();
    });
  }

  public carregarFormulario(): void {
    this.form = this.formularioService.getCadastro();
    this.form?.patchValue({
      nome: this.cadastro.nome,
      nascimento: this.cadastro.nascimento,
      cpf: this.cadastro.cpf,
      telefone: this.cadastro.telefone,
      email: this.cadastro.email,
      senha: this.cadastro.senha,
      genero: this.cadastro.genero,
      cidade: this.cadastro.cidade,
      estado: this.cadastro.estado,
    });
  }

  public atualizar(): void {
    const dadosAtualizados = {
      nome: this.form?.value.nome,
      nascimento: this.form?.value.nascimento,
      cpf: this.form?.value.cpf,
      telefone: this.form?.value.telefone,
      email: this.form?.value.email,
      senha: this.form?.value.senha,
      genero: this.form?.value.genero,
      cidade: this.form?.value.cidade,
      estado: this.form?.value.estado,
    };

    this.cadastroService
      .editarCadastro(dadosAtualizados, this.token)
      .subscribe({
        next: (value) => {
          alert('Editado com sucesso');
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.log('Erro ao atualizar cadastro', error);
        },
      });
  }

  public deslogar() {
    console.log('deslogar');
  }
}
