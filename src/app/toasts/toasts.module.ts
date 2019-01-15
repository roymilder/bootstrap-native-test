import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastsComponent} from './toasts.component';
import {ToastComponent} from './toast.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToastsComponent, ToastComponent],
  exports: [ToastsComponent, ToastComponent]
})
export class ToastsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ToastsModule,
      providers: []
    };
  }
}
