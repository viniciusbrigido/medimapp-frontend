import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmaciaComponent } from './components/farmacia/farmacia.component';
import { PrecoComponent } from './components/preco/preco.component';
import { ContaComponent } from './components/conta/conta.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'farmacia',
        component: FarmaciaComponent
      },
      {
        path: 'preco',
        component: PrecoComponent
      },
      {
        path: 'conta',
        component: ContaComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
