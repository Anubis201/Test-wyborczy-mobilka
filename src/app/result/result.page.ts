import { Component, OnInit } from '@angular/core';
import { ResultService } from './result-service/result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
  providers: [ResultService],
})
export class ResultPage implements OnInit {

  constructor(private resultService: ResultService,) { }

  get data() { return this.resultService.data; }

  ngOnInit() {
    this.resultService.getData();
  }

  onGoHome() {
    this.resultService.handleGoHome();
  }
}
