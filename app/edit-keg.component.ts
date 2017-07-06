import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div>
        <div *ngIf="childSelectedKeg">
          <h3>{{childSelectedKeg.brand}} {{childSelectedKeg.beer}}</h3>
          <hr>
          <h3>Edit Keg</h3>
          <label>Brand:</label>
          <input [(ngModel)]="childSelectedKeg.brand">
          <label>Beer Name:</label>
          <input [(ngModel)]="childSelectedKeg.beer">
          <label>Pint Price:</label>
          <input [(ngModel)]="childSelectedKeg.price">
          <label>ABV:</label>
          <input [(ngModel)]="childSelectedKeg.abv">
          <button (click)="doneButtonClicked()">Done</button>
        </div>
      </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();


  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }


}
