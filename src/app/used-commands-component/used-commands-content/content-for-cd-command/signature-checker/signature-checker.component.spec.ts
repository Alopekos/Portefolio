import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureCheckerComponent } from './signature-checker.component';

describe('SignatureCheckerComponent', () => {
  let component: SignatureCheckerComponent;
  let fixture: ComponentFixture<SignatureCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignatureCheckerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SignatureCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
