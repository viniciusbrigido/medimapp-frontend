import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './components/header/header.component';
import { FarmaciaComponent } from './components/farmacia/farmacia.component';
import { PrecoComponent } from './components/preco/preco.component';
import { ContaComponent } from './components/conta/conta.component';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  declarations: [
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
    MatIconModule
  ]
})
export class HomeModule { }
