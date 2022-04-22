import { Component, Input } from '@angular/core';
import { PartiesEnum } from 'src/models/enums/parties.enum';
import { ResultDataModel } from 'src/models/interfaces/result-data.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  @Input() data: ResultDataModel;

  readonly partiesEnum = PartiesEnum;
}
