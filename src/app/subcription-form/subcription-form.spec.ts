import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcriptionForm } from './subcription-form';

describe('SubcriptionForm', () => {
  let component: SubcriptionForm;
  let fixture: ComponentFixture<SubcriptionForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcriptionForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcriptionForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
