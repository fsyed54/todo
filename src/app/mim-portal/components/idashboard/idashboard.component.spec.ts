import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdashboardComponent } from './idashboard.component';

describe('IdashboardComponent', () => {
  let component: IdashboardComponent;
  let fixture: ComponentFixture<IdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
