import { Component, Input } from '@angular/core';
import { QuestionModel } from 'src/models/interfaces/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  @Input() question: QuestionModel;


}
