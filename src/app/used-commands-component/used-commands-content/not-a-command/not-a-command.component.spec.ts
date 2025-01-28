import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotACommandComponent } from './not-a-command.component';

describe('NotACommandComponent', () => {
  let component: NotACommandComponent;
  let fixture: ComponentFixture<NotACommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotACommandComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotACommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
