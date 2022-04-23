import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CheckStateGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): any {
    const { state } = this.router.getCurrentNavigation().extras;

    if (!state) {
      this.router.navigate([ '/lista' ]);
    }

    return true;
  }
}
