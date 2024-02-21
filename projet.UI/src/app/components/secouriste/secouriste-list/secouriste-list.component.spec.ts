import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecouristeListComponent } from './secouriste-list.component';

describe('SecouristeListComponent', () => {
  let component: SecouristeListComponent;
  let fixture: ComponentFixture<SecouristeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecouristeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecouristeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
