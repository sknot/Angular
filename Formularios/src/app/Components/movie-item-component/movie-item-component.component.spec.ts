import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieItemComponentComponent } from './movie-item-component.component';

describe('MovieItemComponentComponent', () => {
  let component: MovieItemComponentComponent;
  let fixture: ComponentFixture<MovieItemComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieItemComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
