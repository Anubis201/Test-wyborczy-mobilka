import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { parlamentarne2023 } from 'src/app/data/2023-parlamentarne.data';
import { parodiaPartii } from 'src/app/data/parodia-partii.data';
import { TestModel } from 'src/models/interfaces/test.model';

@Injectable()
export class LevelService {
  data: TestModel;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  getLevelData() {
    this.activatedRoute.params.subscribe({
      next: ({ id }: { id: number }) => {
        this.data = [parlamentarne2023, parodiaPartii].find(ele => ele.id = id);
      }
    });
  }
}
