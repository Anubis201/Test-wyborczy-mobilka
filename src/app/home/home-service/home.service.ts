import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { parlamentarne2023 } from 'src/app/data/2023-parlamentarne.data';
import { parodiaPartii } from 'src/app/data/parodia-partii.data';
import { TestModel } from 'src/models/interfaces/test.model';

@Injectable()
export class HomeService {
  tests: TestModel[] = [
    parlamentarne2023,
    parodiaPartii,
  ];

  constructor(private router: Router) {}

  handleGoHome() {
    this.router.navigateByUrl('/lista');
  }
}
