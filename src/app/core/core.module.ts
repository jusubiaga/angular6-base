import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

/* Custom services  */
import { AuthService } from './services/auth.service';
import { HeaderToolbarComponent } from './components/header-toolbar/header-toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [HeaderToolbarComponent],
  exports: [HeaderToolbarComponent],
  providers: [
    AuthService
  ]
})
export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor (
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}