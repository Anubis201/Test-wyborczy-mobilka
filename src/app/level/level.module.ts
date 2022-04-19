import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelPageRoutingModule } from './level-routing.module';

import { LevelPage } from './level.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelPageRoutingModule,
    SharedModule,
  ],
  declarations: [LevelPage]
})
export class LevelPageModule {}
