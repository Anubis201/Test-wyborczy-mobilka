import { Component, OnInit } from '@angular/core';
import { LevelService } from './level-service/level.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.page.html',
  styleUrls: ['./level.page.scss'],
  providers: [LevelService],
})
export class LevelPage implements OnInit {

  constructor(
    private levelService: LevelService,
  ) { }

  ngOnInit() {
    this.levelService.getLevelData();
  }
}
