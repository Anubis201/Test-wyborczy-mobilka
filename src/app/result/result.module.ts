import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ResultPageRoutingModule } from './result-routing.module';

import { ResultPage } from './result.page';
import { SharedModule } from '../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ResultPageRoutingModule,
    SharedModule,
  ],
  declarations: [
    ResultPage,
    ContentComponent,
  ]
})
export class ResultPageModule {}
