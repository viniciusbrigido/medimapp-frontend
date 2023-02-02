import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from './components/header/header.component';
import { FarmaciaComponent } from './components/farmacia/farmacia.component';
import { PrecoComponent } from './components/preco/preco.component';
import { ContaComponent } from './components/conta/conta.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HomeComponent } from './home.component';
import { SocialLoginModule } from "@abacritt/angularx-social-login";

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FarmaciaComponent,
    PrecoComponent,
    ContaComponent,
    InicioComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTooltipModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    SocialLoginModule,
  ],
})
export class HomeModule { }
