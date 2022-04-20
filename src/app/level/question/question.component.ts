import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AnswerModel } from 'src/models/interfaces/answer.model';
import { QuestionModel } from 'src/models/interfaces/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  @Input() question: QuestionModel;
  @Input() length: number;
  @Input() currentQuestion: number;

  @Output() changeAnswer = new EventEmitter<{ answerIndex: number; isChoosed: boolean }>();

  abra(index: number, asnwer: AnswerModel) {
    return asnwer.text;
  }
}
