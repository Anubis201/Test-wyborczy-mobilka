import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.page.html',
  styleUrls: ['./confirm-modal.page.scss'],
})
export class ConfirmModalPage {
  @Input() text: string;

  constructor(private modalController: ModalController) { }

  dismissModal(isConfirm: boolean) {
    this.modalController.dismiss({ isConfirm });
  }
}
