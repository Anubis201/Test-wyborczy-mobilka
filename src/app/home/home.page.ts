import { Component } from '@angular/core';
import { HomeService } from './home-service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [HomeService],
})
export class HomePage {
  tests = this.homeService.tests;

  constructor(
    private homeService: HomeService,
  ) {}
}
