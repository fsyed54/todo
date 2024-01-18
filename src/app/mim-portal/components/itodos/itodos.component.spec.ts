import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItodosComponent } from './itodos.component';

describe('ItodosComponent', () => {
  let component: ItodosComponent;
  let fixture: ComponentFixture<ItodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
