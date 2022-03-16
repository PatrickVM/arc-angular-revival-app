import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevivalsComponent } from './revivals.component';

describe('RevivalsComponent', () => {
  let component: RevivalsComponent;
  let fixture: ComponentFixture<RevivalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevivalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
