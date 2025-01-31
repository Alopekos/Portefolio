import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretThreeComponent } from './secret-three.component';

describe('SecretTwoComponent', () => {
  let component: SecretThreeComponent;
  let fixture: ComponentFixture<SecretThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretThreeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecretThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
