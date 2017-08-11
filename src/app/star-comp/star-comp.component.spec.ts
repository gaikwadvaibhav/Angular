import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarCompComponent } from './star-comp.component';

describe('StarCompComponent', () => {
  let component: StarCompComponent;
  let fixture: ComponentFixture<StarCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
