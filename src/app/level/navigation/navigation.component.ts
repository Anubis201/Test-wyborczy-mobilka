import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @Input() currentQuestion: number;
  @Input() length: number;

  @Output() changeCurrentQuestion = new EventEmitter<number>();
  @Output() endTest = new EventEmitter<void>();
}
