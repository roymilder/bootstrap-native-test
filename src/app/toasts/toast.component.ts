/**
 * Bootstrap Toast component
 * Based on Twitter Bootstrap v4 (https://getbootstrap.com/docs/4.2/components/toasts/#options)
 * Based on Bootstrap Native (https://github.com/thednp/bootstrap.native)
 * See: https://github.com/thednp/bootstrap.native/issues/260
 */
import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import * as bsn from 'bootstrap.native/dist/bootstrap-native-v4';
import {ToastMessage, ToastService} from './toast.service';


@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
})
export class ToastComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('toast', {read: ElementRef}) toast: ElementRef;
  @Input() data: ToastMessage;

  private _toast: any;
  private _options = {
    animation: true,
    autohide: false,
    delay: 3000
  };

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this._toast = new bsn.Toast(this.toast.nativeElement.querySelector('[data-dismiss="toast"]'), this._options);
    this._toast.show();
  }

  ngOnDestroy() {
    this._toast.dispose();
  }

}
