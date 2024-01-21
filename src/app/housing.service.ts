import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }
  readonly baseUrl = './../assets/samplePlants';
  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Bozo',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/begoniaPolkaDot.jpg`,
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: 'Mr. Swan',
      city: 'Santa Monica',
      state: 'CA',
      photo: `${this.baseUrl}/birdsOfParadise.jpg`,
      availableUnits: 0,
      wifi: false,
      laundry: true
    },
    {
      id: 2,
      name: 'Johnny',
      city: 'Juneau',
      state: 'AK',
      photo: `${this.baseUrl}/fiddleLeafFig.jpeg`,
      availableUnits: 1,
      wifi: false,
      laundry: false
    },
    {
      id: 3,
      name: 'St. Chill',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/norfolkIslandPine.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 4,
      name: 'Willy',
      city: 'Gary',
      state: 'IN',
      photo: `${this.baseUrl}/redPineapple.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 5,
      name: 'Stinky',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/rottingFleshFlower.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true
    }
  ];

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }
}
