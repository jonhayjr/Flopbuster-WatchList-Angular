import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'my-watch-list-item',
  templateUrl: './watch-list-item.component.html',
  styles: [ 'i {cursor:pointer}' ]
})
export class WatchListItemComponent  {
  @Input() item;
  @Input() first;
  @Input() last;
  @Input() index;
  @Output() ArrowUpEvent = new EventEmitter();
  @Output() ArrowDownEvent = new EventEmitter();

  ngOnInit() {
  }

  getClasses(onSale) {
    if (onSale) {
      return 'bg-success text-light p-3 rounded mb-2'
    } else {
      return 'bg-dark text-light p-3 rounded mb-2'
    }
  }

  handleUpArrowClick() {
    this.ArrowUpEvent.emit(this.index);
  }

  handleDownArrowClick() {
    this.ArrowDownEvent.emit(this.index);
  }

}