/**
 * Bootstrap Toast component
 * Based on Twitter Bootstrap v4 (https://getbootstrap.com/docs/4.2/components/toasts/#options)
 * Based on Bootstrap Native (https://github.com/thednp/bootstrap.native)
 * See: https://github.com/thednp/bootstrap.native/issues/260
 */
import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ToastMessage, ToastService} from './toast.service';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('toast', {read: ElementRef}) toast: ElementRef;


  public toasts: ToastMessage[] = [];
  private sub: Subscription;

  constructor(private toastService: ToastService) {

  }

  ngOnInit() {
    this.sub = this.toastService.subscribe((res) => {
      this.toasts.push(res);
    });
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
