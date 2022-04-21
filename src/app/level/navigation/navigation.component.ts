import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @Input() currentQuestion: number;
  @Input() length: number;
  @Input() isNotCurrentQuestionChoosed: boolean;
  @Input() isAllQuestionChoosed: boolean;

  @Output() changeCurrentQuestion = new EventEmitter<number>();
  @Output() endTest = new EventEmitter<void>();
  @Output() goHome = new EventEmitter<void>();
}
