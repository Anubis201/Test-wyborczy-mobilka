import { Component } from '@angular/core';
import { PartiesEnum } from 'src/models/enums/parties.enum';

@Component({
  selector: 'app-start-describe',
  templateUrl: './start-describe.component.html',
  styleUrls: ['./start-describe.component.scss'],
})
export class StartDescribeComponent {

  readonly partiesEnum = PartiesEnum;

}
