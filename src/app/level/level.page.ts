import { Component, OnInit } from '@angular/core';
import { LevelService } from './level-service/level.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.page.html',
  styleUrls: ['./level.page.scss'],
  providers: [LevelService],
})
export class LevelPage implements OnInit {

  constructor(private levelService: LevelService) { }

  get data() { return this.levelService.data; }
  get isLoading() { return this.levelService.isLoading; }
  get currentQuestion() { return this.levelService.currentQuestion; }
  get isAllQuestionChoosed() { return this.levelService.isAllQuestionChoosed; }
  get isNotCurrentQuestionChoosed() { return this.levelService.isNotCurrentQuestionChoosed; }

  ngOnInit() {
    this.levelService.getLevelData();
    this.levelService.verifyIsAllQuestionChoosed();
    this.levelService.verifyIsCurrentQuestionChoosed();
  }

  onChangeCurrentQuestion(int: number) {
    this.levelService.currentQuestion = int;
    this.levelService.verifyIsCurrentQuestionChoosed();
  }

  onEndTest() {
    this.levelService.handleEndTest();
  }

  onChangeAnswer({ answerIndex, isChoosed }: { answerIndex: number; isChoosed: boolean }) {
    const questions = this.data.questions;

    questions[this.currentQuestion]
      .answers = questions[this.currentQuestion].answers
      .map(answer => ({ ...answer, isChoosed: false }));

    questions[this.currentQuestion].answers[answerIndex].isChoosed = isChoosed;

    this.levelService.verifyIsAllQuestionChoosed(questions);
    this.levelService.verifyIsCurrentQuestionChoosed();
    this.levelService.data.questions = questions;
  }

  onGoHome() {
    this.levelService.handleGoHome();
  }

  onEnd() {
    this.levelService.handleEnd();
  }
}
