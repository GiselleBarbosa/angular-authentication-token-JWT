import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AutenticacaoInterceptor } from './core/interceptors/autenticacao.interceptor';
import { BannerComponent } from './shared/banner/banner.component';
import { BotaoControleComponent } from './shared/botao-controle/botao-controle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { CardBuscaComponent } from './shared/card-busca/card-busca.component';
import { CardComponent } from './shared/card/card.component';
import { CardDepoimentoComponent } from './shared/card-depoimento/card-depoimento.component';
import { ContainerComponent } from './shared/container/container.component';
import { DepoimentosComponent } from './pages/home/depoimentos/depoimentos.component';
import { DropdownUfComponent } from './shared/dropdown-uf/dropdown-uf.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormBaseComponent } from './shared/form-base/form-base.component';
import { FormBuscaComponent } from './shared/form-busca/form-busca.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ModalComponent } from './shared/modal/modal.component';
import { NgModule } from '@angular/core';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PromocoesComponent } from './pages/home/promocoes/promocoes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SeletorPassageiroComponent } from './shared/seletor-passageiro/seletor-passageiro.component';
import { BuscaComponent } from './pages/busca/busca.component';
import { PassagemComponent } from './shared/passagem/passagem.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    CardComponent,
    ContainerComponent,
    HomeComponent,
    FooterComponent,
    CardBuscaComponent,
    CardDepoimentoComponent,
    FormBuscaComponent,
    ModalComponent,
    BotaoControleComponent,
    PromocoesComponent,
    DropdownUfComponent,
    SeletorPassageiroComponent,
    DepoimentosComponent,
    LoginComponent,
    FormBaseComponent,
    CadastroComponent,
    PerfilComponent,
    BuscaComponent,
    PassagemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatDividerModule,
    MatCheckboxModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutenticacaoInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
