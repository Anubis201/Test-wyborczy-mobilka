import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartiesIconsComponent } from './parties-icons/parties-icons.component';


const declarations = [
  // Pipes

  // Components
  PartiesIconsComponent,
];

const imports = [
];

@NgModule({
  declarations: [
    ...declarations,
  ],
  imports: [
    CommonModule,
    ...imports
  ],
  exports: [
    ...declarations,
    ...imports,
  ]
})
export class SharedModule { }
