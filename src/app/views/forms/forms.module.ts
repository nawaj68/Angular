import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { ChecksRadiosComponent } from './checks-radios/checks-radios.component';
import { FloatingLabelsComponent } from './floating-labels/floating-labels.component';
import { FormControlsComponent } from './form-controls/form-controls.component';
import { InputGropsComponent } from './input-grops/input-grops.component';
import { LayoutComponent } from './layout/layout.component';
import { RangesComponent } from './ranges/ranges.component';
import { SelectComponent } from './select/select.component';
import { ValidationComponent } from './validation/validation.component';


@NgModule({
  declarations: [
    ChecksRadiosComponent,
    FloatingLabelsComponent,
    FormControlsComponent,
    InputGropsComponent,
    LayoutComponent,
    RangesComponent,
    SelectComponent,
    ValidationComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
