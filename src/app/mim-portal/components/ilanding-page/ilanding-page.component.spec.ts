import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlandingPageComponent } from './ilanding-page.component';

describe('IlandingPageComponent', () => {
  let component: IlandingPageComponent;
  let fixture: ComponentFixture<IlandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IlandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IlandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
