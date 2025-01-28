import { Component, ChangeDetectorRef, NgZone } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TerminalInputComponent } from './terminal-input/terminal-input.component';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './presentation/presentation.component';
import { PresentationAnimationComponent } from './presentation-animation/presentation-animation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TerminalInputComponent,
    CommonModule,
    PresentationComponent,
    PresentationAnimationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portefolio';

  public showOverlay = false;
  public showUserInput = false;
  public launchPresentation = true;

  onAnimationCompleted(): void {
    this.showOverlay = true;
    this.showUserInput = true;
    this.launchPresentation = false;
  }
}
