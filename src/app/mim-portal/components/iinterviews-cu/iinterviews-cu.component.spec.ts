import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IinterviewsCuComponent } from './iinterviews-cu.component';

describe('IinterviewsCuComponent', () => {
  let component: IinterviewsCuComponent;
  let fixture: ComponentFixture<IinterviewsCuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IinterviewsCuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IinterviewsCuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
