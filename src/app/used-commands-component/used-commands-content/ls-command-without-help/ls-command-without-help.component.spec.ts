import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsCommandComponent } from './ls-command-without-help.component';

describe('LsCommandComponent', () => {
  let component: LsCommandComponent;
  let fixture: ComponentFixture<LsCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LsCommandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LsCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
