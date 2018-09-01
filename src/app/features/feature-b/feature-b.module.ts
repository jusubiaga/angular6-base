import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureBRoutingModule } from './feature-b-routing.module';
import { FeatureBComponent } from './feature-b.component';
import { RibbonComponent } from '@app/shared';

@NgModule({
  imports: [
    CommonModule,
    FeatureBRoutingModule
  ],
  declarations: [
    FeatureBComponent,
    RibbonComponent
  ]
})
export class FeatureBModule { }
