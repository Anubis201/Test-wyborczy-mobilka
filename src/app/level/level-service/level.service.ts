import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parlamentarne2023 } from 'src/app/data/2023-parlamentarne.data';
import { parodiaPartii } from 'src/app/data/parodia-partii.data';
import { QuestionModel } from 'src/models/interfaces/question.model';
import { TestModel } from 'src/models/interfaces/test.model';

@Injectable()
export class LevelService {
  data: TestModel;
  isLoading = true;
  currentQuestion = 0;
  isAllQuestionChoosed = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  getLevelData() {
    this.activatedRoute.params.subscribe({
      next: ({ title }: { title: string }) => {
        this.data = [parlamentarne2023, parodiaPartii].find(ele => ele.title = title);
        this.isLoading = false;
      }
    });
  }

  handleEndTest() {
    this.router.navigateByUrl('/wynik');
  }

  verifyIsAllQuestionChoosed(questions: QuestionModel[] = this.data.questions) {
    let isAllChoosed = this.isAllQuestionChoosed;

    isAllChoosed = questions.every(question => {
      let isSomeAnswerChecked = false;

      question.answers.every(answer => {
        if (answer.isChoosed) {
          isSomeAnswerChecked = true;
          return false;
        }

        return true;
      });

      return isSomeAnswerChecked;
    });

    this.isAllQuestionChoosed = isAllChoosed;
  }
}
