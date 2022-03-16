import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Revival } from './revival';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const revivals = [
          {
            id: 1,
            name: 'Asuza Street', 
            date: '4/9/1906',
            comments: ['super awesome', 'my life was changed forever', 'I am thankful for AC'],
        },
        {
            id: 2,
            name: 'Welsh', 
            date: '9/22/1904',
            comments: ['transformed populations', 'changed the culture of a city.', 'sparked revival around the world.'],
          },
        {
            id: 3,
            name: '1st Great Awakening', 
            date: '5/22/1727',
            comments: ['Started an educational reformation', 'The birthing of Sunday school.'],
        },
        {
            id: 4,
            name: 'Jesus People', 
            date: '3/01/1965',
            comments: ['Started at the beginning of the information age.', 'Many renown leaders today were sparked by this movement.', 'Could it be called the Hippy Movement?', 'Jesus was the og hippy.#spiritualg'],
        },
        {
            id: 5,
            name: 'Pentecost', 
            date: 'A.D. 30',
            comments: ['The beginning.', 'Gave courage to a needy people.', 'Empowered a people to change the world.'],
        },
        {
            id: 6,
            name: 'WW2 Revival', 
            date: '10/13/1935',
            comments: ['People saved through TV', 'Roman road central.', 'Transformed at the alter.'],
        }
    ];
    return {revivals};
  }

  genId(revivals: Revival[]): number{
    return revivals.length > 0 ? Math.max(...revivals.map(revival => revival.id)) + 1 : 7; // changed 11 to 7
  }
  
  constructor() { }
}
