import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationAnimationComponent } from './presentation-animation.component';

describe('PresentationAnimationComponent', () => {
  let component: PresentationAnimationComponent;
  let fixture: ComponentFixture<PresentationAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationAnimationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresentationAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
