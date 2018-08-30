import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';

// Import UI component lib. Like Material / ngcomponents
// import { MdButtonModule } from '@angular/material';

import { CustomSharedComponent } from './components/custom-shared/custom-shared.component';

@NgModule({
  imports: [
    // Angular stuff
    CommonModule,
    FormsModule,

    // 3rd party components
    // MdButtonModule,
  ],
  declarations: [
    CustomSharedComponent
  ],
  exports: [
    // Angular stuff
    CommonModule,
    FormsModule,

    // 3rd party components
    // MdButtonModule,

    // custom components
    CustomSharedComponent
  ]
})
export class SharedModule { }