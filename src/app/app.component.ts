import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TerminalInputComponent } from './terminal-input/terminal-input.component';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './presentation-components/presentation/presentation.component';
import { PresentationAnimationComponent } from './presentation-components/presentation-animation/presentation-animation.component';
import { HelpComponent } from './help-components/help/help.component';
import { UsedCommandsComponent } from './used-commands-component/used-commands/used-commands.component';
import { NotACommandComponent } from './used-commands-component/used-commands-content/not-a-command/not-a-command.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TerminalInputComponent,
    CommonModule,
    PresentationComponent,
    PresentationAnimationComponent,
    HelpComponent,
    UsedCommandsComponent,
    NotACommandComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portefolio';
  children: string[] = [];

  addNewChild() {}
  public showLoadingAnim = true;

  onAnimationCompleted(): void {
    this.showLoadingAnim = false;
  }

  onHelpCommand(): void {
    this.children.push('help');
    this.waitAndScroll();
  }

  onClearCommand(): void {
    this.children.push('clear');
    this.waitAndScroll();
  }

  onLsCommand(): void {
    this.children.push('ls');
    this.waitAndScroll();
  }

  onNotACommand(): void {
    this.children.push('');
    this.waitAndScroll();
  }

  async waitAndScroll(): Promise<void> {
    await this.wait(100);
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  }

  wait(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
