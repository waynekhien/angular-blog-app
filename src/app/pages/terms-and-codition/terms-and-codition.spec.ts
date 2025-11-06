import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsAndCodition } from './terms-and-codition';

describe('TermsAndCodition', () => {
  let component: TermsAndCodition;
  let fixture: ComponentFixture<TermsAndCodition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermsAndCodition]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsAndCodition);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
