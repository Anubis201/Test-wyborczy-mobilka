import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { IonicModule } from '@ionic/angular';

import { LevelPageRoutingModule } from './level-routing.module';

import { LevelPage } from './level.page';
import { SharedModule } from '../shared/shared.module';
import { QuestionComponent } from './question/question.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelPageRoutingModule,
    SharedModule,
    MatCheckboxModule,
  ],
  declarations: [
    LevelPage,
    QuestionComponent,
    NavigationComponent,
  ],
})
export class LevelPageModule {}
