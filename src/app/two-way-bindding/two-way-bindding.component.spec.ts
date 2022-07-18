import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBinddingComponent } from './two-way-bindding.component';

describe('TwoWayBinddingComponent', () => {
  let component: TwoWayBinddingComponent;
  let fixture: ComponentFixture<TwoWayBinddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayBinddingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayBinddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
