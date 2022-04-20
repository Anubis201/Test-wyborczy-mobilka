import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QuestionModel } from 'src/models/interfaces/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  @Input() question: QuestionModel;

  @Output() changeAnswer = new EventEmitter<{ answerIndex: number; isChoosed: any }>();
  test() {
    console.log('DSDAS');
  }
}
