import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AutenticacaoService } from './../../core/services/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private AutenticacaoService = inject(AutenticacaoService);
  private router = inject(Router);
  private formBuilder = inject(FormBuilder);

  public loginForm!: FormGroup;

  public ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.email],
      senha: [null],
    });
  }

  public login() {
    const email = this.loginForm.value.email;
    const senha = this.loginForm.value.senha;

    this.AutenticacaoService.autenticar(email, senha).subscribe({
      next: (value) => {
        console.log('Login realizado com sucesso.', value);
        this.router.navigateByUrl('home');
      },
      error: (error) => {
        console.log('Erro no login', error);
      },
    });
  }
}
