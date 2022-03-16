import { Component, OnInit, Input } from '@angular/core';

import { Revival } from '../revival';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RevivalService } from '../revival.service';
import { RevivalsComponent } from '../revivals/revivals.component';


@Component({
  selector: 'app-revival-detail',
  templateUrl: './revival-detail.component.html',
  styleUrls: ['./revival-detail.component.css']
})
export class RevivalDetailComponent implements OnInit {

  @Input() revival?: Revival;


  constructor(
    private route: ActivatedRoute,
    private revivalService: RevivalService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getRevival();
  }

  getRevival(): void {
    const id = 
    Number(this.route.snapshot.paramMap.get('id'));
      this.revivalService.getRevival(id)
        .subscribe(revival => this.revival = revival);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if(this.revival) {
      this.revivalService.updateRevival(this.revival)
        .subscribe(() => this.goBack());
    }
  }

  
  


}
