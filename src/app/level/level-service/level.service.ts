import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { parlamentarne2023 } from 'src/app/data/2023-parlamentarne.data';
import { parodiaPartii } from 'src/app/data/parodia-partii.data';
import { ConfirmModalComponent } from 'src/app/shared/confirm-modal/confirm-modal.component';
import { QuestionModel } from 'src/models/interfaces/question.model';
import { TestModel } from 'src/models/interfaces/test.model';

@Injectable()
export class LevelService {
  data: TestModel;
  isLoading = true;
  currentQuestion = 0;
  isAllQuestionChoosed = false;
  isNotCurrentQuestionChoosed = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalController: ModalController,
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
    this.isAllQuestionChoosed = questions.every(question => {
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
  }

  verifyIsCurrentQuestionChoosed() {
    this.isNotCurrentQuestionChoosed = this.data.questions[this.currentQuestion].answers.every(answer => !answer.isChoosed);
  }

  handleGoHome() {

  }

  handleEnd() {

  }

  async confirmModal() {
    const modal = await this.modalController.create({
      component: ConfirmModalComponent,
    });

    modal.onDidDismiss().then(dataReturned => {
      console.log(dataReturned);
    });

    return await modal.present();
  }
}
