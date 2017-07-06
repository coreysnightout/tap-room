import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Keg List for {{month}}/{{day}}/{{year}}</h1>
      <!-- <h3>{{currentFocus}}</h3> -->
      <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
      <hr>
      <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
      <new-keg (newKegSender)="addKeg($event)"></new-keg>
    </div>
  `
})

export class AppComponent {
  // currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg('HopWorks', 'Ferocious Citrus IPA', 6, 6.2),
    new Keg('HopWorks', 'Ferocious Citrus IPA', 6, 6.2),
    new Keg('HopWorks', 'Ferocious Citrus IPA', 6, 6.2),
  ];

  editKeg(kegToEdit) {
    this.selectedKeg = kegToEdit;
    // console.log(this.selectedKeg);
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
   this.masterKegList.push(newKegFromChild);
 }

}
