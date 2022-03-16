import { Component, OnInit } from '@angular/core';
import { Revival } from '../revival';
import { REVIVALS } from '../mock-revival';

import { RevivalService } from '../revival.service';

@Component({
  selector: 'app-revivals',
  templateUrl: './revivals.component.html',
  styleUrls: ['./revivals.component.css']
})
export class RevivalsComponent implements OnInit {

  revivals: Revival[] = [];


  // selectedRevival?: Revival;
  // onSelect(revival: Revival): void {
  //   this.selectedRevival = revival;
  // }

  getRevivals(): void {
    this.revivalService.getRevivals()
      .subscribe(revivals => this.revivals = revivals);
  }

  add(name: string, date: string): void {
    name = name.trim();
    date = date.trim();

    if(!name) {return;}
    this.revivalService.addRevival({name, date} as Revival)
      .subscribe(revival => {
        this.revivals.push(revival);
      });
  }


  // addDate(date: string): void {
  //   date = date.trim();
  //   if(!date) {return;}
  //   this.revivalService.addRevivalDate({date} as Revival) 
  //     .subscribe(revival => {
  //       this.revivals.push(revival);
  //     });
  // }



  delete(revival: Revival): void {
    this.revivals = this.revivals.filter(h => h !== revival);
    this.revivalService.deleteRevival(revival.id).subscribe();
  }

  constructor(private revivalService: RevivalService) { }

  ngOnInit(): void {
    this.getRevivals();
  }

}
