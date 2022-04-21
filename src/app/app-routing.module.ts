import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'start',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'wynik',
    loadChildren: () => import('./result/result.module').then( m => m.ResultPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./level/level.module').then( m => m.LevelPageModule)
  },
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },  {
    path: 'confirm-modal',
    loadChildren: () => import('./confirm-modal/confirm-modal.module').then( m => m.ConfirmModalPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
