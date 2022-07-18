import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneWayBinddingComponent } from './one-way-bindding.component';

describe('OneWayBinddingComponent', () => {
  let component: OneWayBinddingComponent;
  let fixture: ComponentFixture<OneWayBinddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneWayBinddingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneWayBinddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
