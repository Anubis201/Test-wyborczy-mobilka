import { Component, OnInit } from '@angular/core';
import { ResultService } from './result-service/result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
  providers: [ResultService],
})
export class ResultPage implements OnInit {

  constructor(private resultService: ResultService) { }

  ngOnInit() {
    this.resultService.getData();
  }
}
