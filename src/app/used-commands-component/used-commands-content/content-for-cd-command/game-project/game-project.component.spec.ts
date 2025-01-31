import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameProjectComponent } from './game-project.component';

describe('GameProjectComponent', () => {
  let component: GameProjectComponent;
  let fixture: ComponentFixture<GameProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameProjectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GameProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
