import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';
// Translate Service
import { TranslateModule } from '@ngx-translate/core'

// Import UI component lib. Like Material / ngcomponents
// import { MdButtonModule } from '@angular/material';

// Shared Components
import { RibbonComponent } from './ribbon/ribbon.component';

@NgModule({
  imports: [
    // Angular stuff
    CommonModule,
    FormsModule,

    // 3rd party components
    // MdButtonModule,
  ],
  declarations: [
    RibbonComponent
  ],
  exports: [
    // Angular stuff
    CommonModule,
    FormsModule,
    TranslateModule,

    // 3rd party components
    // MdButtonModule,

    // custom components
    RibbonComponent
  ]
})
export class SharedModule { }
