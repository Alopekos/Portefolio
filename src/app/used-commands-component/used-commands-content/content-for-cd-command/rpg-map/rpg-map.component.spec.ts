import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpgMapComponent } from './rpg-map.component';

describe('RpgMapComponent', () => {
  let component: RpgMapComponent;
  let fixture: ComponentFixture<RpgMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RpgMapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RpgMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
