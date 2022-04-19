import { Component } from '@angular/core';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { PartiesEnum } from 'src/models/enums/parties.enum';

@Component({
  selector: 'app-parties-icons',
  templateUrl: './parties-icons.component.html',
  styleUrls: ['./parties-icons.component.scss'],
})
export class PartiesIconsComponent {
  partiesArray = this.toolsService.convertEnumToArrray(PartiesEnum, 'number');

  readonly partiesEnum = PartiesEnum;

  constructor(private toolsService: ToolsService) {}

}
