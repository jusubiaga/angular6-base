import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';

import { FeatureARoutingModule } from './feature-a-routing.module';
import { FeatureAComponent } from './feature-a.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FeatureARoutingModule
  ],
  declarations: [FeatureAComponent]
})
export class FeatureAModule { }
