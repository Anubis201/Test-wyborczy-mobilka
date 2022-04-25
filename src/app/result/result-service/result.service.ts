import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ResultDataModel } from 'src/models/interfaces/result-data.model';

@Injectable()
export class ResultService {
  data: ResultDataModel;

  constructor(
    private router: Router,
    private modalService: ModalService,
  ) { }

  getData() {
    this.data = this.router.getCurrentNavigation().extras.state as ResultDataModel;
  }

  handleGoHome() {
    this.modalService.confirmModal('Czy, aby na pewno chcesz wrócić do listy testów? Dane zostaną utracone!').then(val => {
      if (val.data.isConfirm) {
        this.router.navigateByUrl('/lista');
      }
    });
  }
}
