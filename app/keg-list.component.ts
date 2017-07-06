

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
     <!-- <select (change)="onChange($event.target.value)">
       <option value="allTasks">All Tasks</option>
       <option value="completedTasks">Completed Tasks</option>
       <option value="incompleteTasks" selected="selected">Incomplete Tasks</option>
     </select> -->
     <ul>
       <li *ngFor="let currentKeg of childKegList">{{currentKeg.brand}} {{currentKeg.beer}} {{currentKeg.price}} {{currentKeg.abv}} {{currentKeg.pints}}
         <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
         <button (click)="subtractPint(currentKeg)">Pint Subtract</button>
         <button (click)="subtractPitcher(currentKeg)">Pitcher Subtract</button>
       </li>
     </ul>
   `
 })

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  // filterByCompleteness: string = "incompleteTasks";

  // toggleDone(clickedTask: Keg, setCompleteness: boolean) {
  //   clickedTask.done = setCompleteness;
  // }

  // onChange(optionFromMenu) {
  //   this.filterByCompleteness = optionFromMenu;
  // }

  editButtonHasBeenClicked(kegToEdit: Keg) {
    console.log('hi' + this.clickSender);
    this.clickSender.emit(kegToEdit);
  }

  subtractPint(currentKeg: Keg) {
    if (currentKeg.pints > 0) {
      currentKeg.pints = currentKeg.pints - 1;
      return currentKeg.pints;
    } else {
      alert("There's no more! Choose another keg!")
    }
  }

  subtractPitcher(currentKeg: Keg) {
    if (currentKeg.pints > 0) {
      currentKeg.pints = currentKeg.pints - 5;
      return currentKeg.pitcher;
    } else {
      console.log(subtractPitcher)
    }
  }

  // isDone(clickedTask: Keg) {
  //   if(clickedTask.done === true) {
  //     alert("This task is done!");
  //   } else {
  //     alert("This task is not done. Better get to work!");
  //   }
  // }

  // priorityColor(currentTask){
  //   if (currentTask.priority === 3){
  //     return "bg-danger";
  //   } else if (currentTask.priority === 2) {
  //     return  "bg-warning";
  //   } else {
  //     return "bg-info";
  //   }
  // }
}
