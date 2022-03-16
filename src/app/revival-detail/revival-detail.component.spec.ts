import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevivalDetailComponent } from './revival-detail.component';

describe('RevivalDetailComponent', () => {
  let component: RevivalDetailComponent;
  let fixture: ComponentFixture<RevivalDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevivalDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevivalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
