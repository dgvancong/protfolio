import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeProtfolioComponent } from './home-protfolio.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pages/home' },
  {
    path: '',
    component: HomeProtfolioComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home-protfolio.module').then((m) => m.HomeProtfolioModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class HomeProtfolioRoutingModule { }
