import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';

import { ResultPage } from './result.page';

const routes: Routes = [
  {
    path: '',
    component: ResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultPageRoutingModule {}
