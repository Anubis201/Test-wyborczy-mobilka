import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }

  convertEnumToArrray(ob: object, type: 'string' | 'number') {
    return Object.values(ob)
      .filter((value) => typeof value === type)
      .map((value) => (value));
  }
}
