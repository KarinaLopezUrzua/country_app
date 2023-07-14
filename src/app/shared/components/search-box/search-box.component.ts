import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
})

export class SearchBoxComponent {
  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();
  //public  onValue: EventEmitter<string> = new EventEmitter<string>();   --- esta es otra forma de colocarlo

  emitValue(value: string): void {
    this.onValue.emit(value); //emite un evento utilizando la propiedad onValue
  }
}
