import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentShowingHomepageComponent } from './current-showing-homepage.component';

describe('CurrentShowingHomepageComponent', () => {
  let component: CurrentShowingHomepageComponent;
  let fixture: ComponentFixture<CurrentShowingHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentShowingHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentShowingHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
