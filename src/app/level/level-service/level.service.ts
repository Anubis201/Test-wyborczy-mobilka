import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parlamentarne2023 } from 'src/app/data/2023-parlamentarne.data';
import { parodiaPartii } from 'src/app/data/parodia-partii.data';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { PartiesEnum } from 'src/models/enums/parties.enum';
import { QuestionModel } from 'src/models/interfaces/question.model';
import { ResultDataModel } from 'src/models/interfaces/result-data.model';
import { TestModel } from 'src/models/interfaces/test.model';
import { ResultType } from 'src/models/types/result.type';

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
    private toolsService: ToolsService,
    private modalService: ModalService,
  ) { }

  getLevelData() {
    this.activatedRoute.params.subscribe({
      next: ({ title }: { title: string }) => {
        this.reset();
        this.data = JSON.parse(JSON.stringify([parlamentarne2023, parodiaPartii].find(ele => ele.title === title)));
        this.isLoading = !this.data;
      }
    });
  }

  handleEndTest() {
    this.modalService.confirmModal('Wszystko gotowe. Chcesz zobaczyć wyniki?').then(val => {
      if (val.data.isConfirm) {
        const result: Partial<ResultType> = {};

        this.toolsService.convertEnumToArrray(PartiesEnum, 'number').forEach((ele: PartiesEnum) => {
          result[ele] = 0;
        });

        this.data.questions.forEach(question => {
          question.answers.every(answer => {
            if (answer.isChoosed) {
              answer.partiesPoints.forEach(all => {
                result[all.party] = result[all.party] + all.points;
              });
              return false;
            }
            return true;
          });
        });

        const sortableResult = Object.entries(result).sort(([, a], [, b]) => (a - b));

        this.router.navigateByUrl('/wynik', {
          state: {
            title: this.data.title,
            result: sortableResult.map(ele => ({ party: parseInt(ele[0], 10), points: ele[1] })).reverse(),
          } as ResultDataModel
        });
      }
    });
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
    if (!this.data.questions.length) {
      return;
    }

    this.isNotCurrentQuestionChoosed = this.data.questions[this.currentQuestion].answers.every(answer => !answer.isChoosed);
  }

  handleGoHome() {
    this.modalService.confirmModal('Czy, aby na pewno chcesz wrócić do listy testów? Dane zostaną utracone!').then(val => {
      if (val.data.isConfirm) {
        this.router.navigateByUrl('/lista');
      }
    });
  }

  reset() {
    this.data = null;
    this.currentQuestion = 0;
    this.isAllQuestionChoosed = false;
    this.isNotCurrentQuestionChoosed = false;
    this.isLoading = true;
  }
}
