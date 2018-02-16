import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactosItemComponent } from './contactos-item.component';

describe('ContactosItemComponent', () => {
  let component: ContactosItemComponent;
  let fixture: ComponentFixture<ContactosItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactosItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
