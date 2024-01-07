import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent {
  public titulo = 'Olá, usuário!';
  public textoBotao = 'ATUALIZAR';
  public perfilComponent = true;

  deslogar() {
    console.log('deslogar');
  }

  atualizar() {
    console.log('atualizar');
  }
}
