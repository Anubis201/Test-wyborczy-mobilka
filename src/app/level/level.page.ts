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

  get data() { return this.levelService.data; }
  get isLoading() { return this.levelService.isLoading; }
  get currentQuestion() { return this.levelService.currentQuestion; }

  ngOnInit() {
    this.levelService.getLevelData();
  }

  onChangeCurrentQuestion(int: number) {
    this.levelService.currentQuestion = int;
  }

  onEndTest() {
    this.levelService.handleEndTest();
  }
}
