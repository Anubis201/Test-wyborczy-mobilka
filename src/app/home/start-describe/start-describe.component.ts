import { Component, Input } from '@angular/core';
import { PartiesEnum } from 'src/models/enums/parties.enum';
import { TestModel } from 'src/models/interfaces/test.model';

@Component({
  selector: 'app-start-describe',
  templateUrl: './start-describe.component.html',
  styleUrls: ['./start-describe.component.scss'],
})
export class StartDescribeComponent {
  @Input() test: TestModel;

  readonly partiesEnum = PartiesEnum;
}
