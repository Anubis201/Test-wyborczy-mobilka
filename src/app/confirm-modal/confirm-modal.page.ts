import { Component, Input } from '@angular/core';
import { ModalService } from '../services/modal/modal.service';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.page.html',
  styleUrls: ['./confirm-modal.page.scss'],
})
export class ConfirmModalPage {
  @Input() text: string;

  constructor(private modalService: ModalService) { }

  dismissModal(isConfirm: boolean) {
    this.modalService.dismissModal(isConfirm);
  }
}
