import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TerminalInputComponent } from './terminal-input/terminal-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TerminalInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portefolio';
}
