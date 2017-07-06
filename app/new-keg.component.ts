import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <h1>New Keg</h1>
   <div>
     <label>Brand:</label>
     <input #newBrand>
     <label>Beer Name:</label>
     <input #newBeer>
     <label>Pint Price:</label>
     <input #newPrice>
     <label>ABV:</label>
     <input #newAbv>
   </div>
   <div>
    <!-- <label>Keg Priority:</label>
    <select #newPriority>
      <option [value]="1"> Low Priority </option>
      <option [value]="2"> Medium Priority </option>
      <option [value]="3"> High Priority </option>
    </select> -->
    <button (click)="submitForm(newBrand.value, newBeer.value, newPrice.value, newAbv.value); newBrand.value=''; newBeer.value=''; newPrice.value=''; newAbv.value='';">Add</button>
    </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(brand: string, beer: string, price: number, abv: number) {
    var newKegToAdd: Keg = new Keg(brand, beer, price, abv);
    this.newKegSender.emit(newKegToAdd);
  }
}
