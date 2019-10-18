import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CampamentoComponent } from './campamento/campamento.component';
import { CampanyaComponent } from './campamento/campanya/campanya.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent},
  { path: 'campamento',  component: CampamentoComponent},
	{ 
		path: 'campamento',
		children: [
			{
				path: 'campanya',
				component: CampanyaComponent
			}
		]
	}
//   { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
