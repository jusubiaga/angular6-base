import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';

import { FeatureBRoutingModule } from './feature-b-routing.module';
import { FeatureBComponent } from './feature-b.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FeatureBRoutingModule
  ],
  declarations: [
    FeatureBComponent
  ]
})
export class FeatureBModule { }
