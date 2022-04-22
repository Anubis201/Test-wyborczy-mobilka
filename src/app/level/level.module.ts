import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LevelPageRoutingModule } from './level-routing.module';
import { LevelPage } from './level.page';
import { SharedModule } from '../shared/shared.module';
import { QuestionComponent } from './question/question.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LevelPageRoutingModule,
    SharedModule,
    MatProgressBarModule,
  ],
  declarations: [
    LevelPage,
    QuestionComponent,
  ],
})
export class LevelPageModule {}
