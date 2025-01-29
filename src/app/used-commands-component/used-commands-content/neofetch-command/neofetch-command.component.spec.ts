import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeofetchCommandComponent } from './neofetch-command.component';

describe('NeofetchCommandComponent', () => {
  let component: NeofetchCommandComponent;
  let fixture: ComponentFixture<NeofetchCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeofetchCommandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeofetchCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
