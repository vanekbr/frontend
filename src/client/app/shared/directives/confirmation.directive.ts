import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[bsConfirm]'
})
export class ConfirmationDirective {
  protected _message: string = 'Are you sure?';

  @Input()
  public set message(value: string) {
    this._message = value;
  }

  @Output()
  public confirm: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public cancel: EventEmitter<void> = new EventEmitter<void>();

  @HostListener('click', ['$event'])
  public clickHandler() {
    const confirmed = window.confirm(this._message);

    if (confirmed) {
      this.confirm.emit();
    } else {
      this.cancel.emit();
    }
  }

}
