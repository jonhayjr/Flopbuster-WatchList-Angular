import { Component } from '@angular/core';
import { WATCH_LIST } from './DATA';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  watchList = WATCH_LIST
  showAll = false;
  listLength = 4;


  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle(this.watchList.length.toString() + ' items in WatchList');
  }

  moveUpItem(index) {
    const itemSelected = this.watchList[index];
    const newIndex = index - 1;
    const itemToSwap = this.watchList[newIndex];

    if (newIndex >= 0) {
      //Move selected item to new index
      this.watchList[newIndex] = itemSelected;

      //Move item from new index to selected index
      this.watchList[index] = itemToSwap;
    }
  }

  moveDownItem(index) {
    const itemSelected = this.watchList[index];
    const newIndex = index + 1;
    const itemToSwap = this.watchList[newIndex];
    const maxIndex = this.watchList.length;

    if (newIndex <= maxIndex) {
        //Move selected item to new index
        this.watchList[newIndex] = itemSelected;

        //Move item from new index to selected index
        this.watchList[index] = itemToSwap;
    }
  }

  handleShowAllClick() {
    //Mark showAll flag as true
    this.showAll = true;

    //Set listLength equal to watchList length
    this.listLength = this.watchList.length;
  }

}
