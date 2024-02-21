import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSecouristeComponent } from './edit-secouriste.component';

describe('EditSecouristeComponent', () => {
  let component: EditSecouristeComponent;
  let fixture: ComponentFixture<EditSecouristeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSecouristeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSecouristeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
