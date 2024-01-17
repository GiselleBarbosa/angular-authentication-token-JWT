import { Component, OnInit, inject } from '@angular/core';

import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private servicoPromocao = inject(PromocaoService);
  private router = inject(Router);

  public ngOnInit(): void {
    this.servicoPromocao.listar().subscribe((resposta) => {
      console.log(resposta);
    });
  }

  public navegarParaBusca(event: Event) {
    this.router.navigate(['/busca']);
  }
}
