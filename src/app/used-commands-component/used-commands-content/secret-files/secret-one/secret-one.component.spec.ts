import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretOneComponent } from './secret-one.component';

describe('SecretOneComponent', () => {
  let component: SecretOneComponent;
  let fixture: ComponentFixture<SecretOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecretOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
