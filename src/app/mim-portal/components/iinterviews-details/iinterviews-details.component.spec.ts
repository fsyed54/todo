import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IinterviewsDetailsComponent } from './iinterviews-details.component';

describe('IinterviewsDetailsComponent', () => {
  let component: IinterviewsDetailsComponent;
  let fixture: ComponentFixture<IinterviewsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IinterviewsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IinterviewsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
