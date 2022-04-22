import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CheckStateGuard } from './services/guards/check-state/check-state.guard';

const routes: Routes = [
  {
    path: 'lista',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'wynik',
    canActivate: [CheckStateGuard],
    loadChildren: () => import('./result/result.module').then( m => m.ResultPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./level/level.module').then( m => m.LevelPageModule)
  },
  {
    path: 'confirm-modal',
    loadChildren: () => import('./confirm-modal/confirm-modal.module').then( m => m.ConfirmModalPageModule)
  },
  {
    path: '',
    redirectTo: 'lista',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
