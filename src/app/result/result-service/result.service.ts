import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ResultModel } from 'src/models/interfaces/result.model';

@Injectable()
export class ResultService {
  data: ResultModel[];

  constructor(private router: Router) { }

  getData() {
    this.data = this.router.getCurrentNavigation().extras.state as ResultModel[];
  }
}
