import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ToastService extends Subject<any> {

  private _messages: ToastMessage[] = [];

  constructor() {
    super();
  }

  private add(type, title, message, datetime = new Date(), autohide = true, delay = 3000): void {
    const toast = {
      type: type,
      title: title,
      message: message,
      datetime: datetime,
      autohide: autohide,
      delay: delay
    };

    this._messages.push(toast);

    this.next(toast);
  }

  info(message: string): void {

    this.add('info', 'Information', message);

  }

  warning(message: string): void {
    this.add('warning', 'Warning', message);
  }

  error(message): void {
    this.add('error', 'Error', message, new Date(), false);
  }

  success(message: string): void {
    this.add('success', 'Success', message);
  }

  message(type: string, title: string, message: string, date = new Date(), autohide = true): void {
    this.add(type, title, message, date, autohide);
  }

  getAll(): ToastMessage[] {
    return this._messages;
  }

  remove(index): void {
    this._messages.splice(index, 1);
  }

  clearAll(): void {
    this._messages = [];
  }
}

export interface ToastMessage {
  type: string;
  title: string;
  message: string;
  datetime?: Date;
  autohide?: boolean;
  delay?: number;
}
