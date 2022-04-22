import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartiesIconsComponent } from './parties-icons/parties-icons.component';
import { NavigationComponent } from './navigation/navigation.component';
import { IonicModule } from '@ionic/angular';


const declarations = [
  // Pipes

  // Components
  PartiesIconsComponent,
  NavigationComponent,
];

const imports = [
  IonicModule,
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
