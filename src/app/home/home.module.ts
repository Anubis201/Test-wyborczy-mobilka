import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { StartDescribeComponent } from './start-describe/start-describe.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    SharedModule,
    MatButtonModule
  ],
  declarations: [
    StartDescribeComponent,
    HomePage,
  ],
})
export class HomePageModule {}
