import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSecouristeComponent } from './add-secouriste.component';

describe('AddSecouristeComponent', () => {
  let component: AddSecouristeComponent;
  let fixture: ComponentFixture<AddSecouristeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSecouristeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSecouristeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
