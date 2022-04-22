import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfirmModalPage } from 'src/app/confirm-modal/confirm-modal.page';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalController: ModalController) { }

  dismissModal(isConfirm: boolean) {
    this.modalController.dismiss({ isConfirm });
  }

  async confirmModal(text: string) {
    const modal = await this.modalController.create({
      component: ConfirmModalPage,
      componentProps: { text }
    });

    modal.present();

    return await modal.onDidDismiss();
  }
}
