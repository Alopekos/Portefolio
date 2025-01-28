import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedCommandsComponent } from './used-commands.component';

describe('UsedCommandsComponent', () => {
  let component: UsedCommandsComponent;
  let fixture: ComponentFixture<UsedCommandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsedCommandsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsedCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
