import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureARoutingModule } from './feature-a-routing.module';
import { FeatureAComponent } from './feature-a.component';

@NgModule({
  imports: [
    CommonModule,
    FeatureARoutingModule
  ],
  declarations: [FeatureAComponent]
})
export class FeatureAModule { }
