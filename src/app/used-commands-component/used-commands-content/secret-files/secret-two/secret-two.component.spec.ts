import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretTwoComponent } from './secret-two.component';

describe('SecretTwoComponent', () => {
  let component: SecretTwoComponent;
  let fixture: ComponentFixture<SecretTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecretTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
