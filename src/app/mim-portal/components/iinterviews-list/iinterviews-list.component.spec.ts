import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IinterviewsListComponent } from './iinterviews-list.component';

describe('IinterviewsListComponent', () => {
  let component: IinterviewsListComponent;
  let fixture: ComponentFixture<IinterviewsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IinterviewsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IinterviewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
