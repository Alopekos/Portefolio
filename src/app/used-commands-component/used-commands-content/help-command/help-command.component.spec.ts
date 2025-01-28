import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCommandComponent } from './help-command.component';

describe('HelpCommandComponent', () => {
  let component: HelpCommandComponent;
  let fixture: ComponentFixture<HelpCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpCommandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelpCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
