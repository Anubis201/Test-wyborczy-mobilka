import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ResultDataModel } from 'src/models/interfaces/result-data.model';

@Injectable()
export class ResultService {
  data: ResultDataModel;

  constructor(private router: Router) { }

  getData() {
    this.data = this.router.getCurrentNavigation().extras.state as ResultDataModel;
  }

  handleGoHome() {
    // this.confirmModal('Czy, aby na pewno chcesz wrócić do listy testów? Uwaga dane zostaną utracone!').then(val => {
    //   if (val.data.isConfirm) {
    //     this.router.navigateByUrl('/lista');
    //   }
    // });
  }
}
