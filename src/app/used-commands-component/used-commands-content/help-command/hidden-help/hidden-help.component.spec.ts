import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenHelpComponent } from './hidden-help.component';

describe('HiddenHelpComponent', () => {
  let component: HiddenHelpComponent;
  let fixture: ComponentFixture<HiddenHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiddenHelpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HiddenHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
