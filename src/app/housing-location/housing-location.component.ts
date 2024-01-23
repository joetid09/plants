import { RouterLink, RouterOutlet } from '@angular/router';
import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
  <section class="listing">
    <div class=listing-contents>
      <img class="listing-photo" src="{{housingLocation.photo}}" alt="Exterior photo of {{housingLocation.name}}">
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </div>
  </section>
  
  `,
  styleUrl: './housing-location.component.sass'
})
export class HousingLocationComponent {
  //I want to test what happens if no value exisists
  @Input() housingLocation!: HousingLocation;
}
