import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosPersonales1Component } from './datos-personales1/datos-personales1.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    DatosPersonales1Component
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    DatosPersonales1Component
  ]
})
export class FormsModule { }
