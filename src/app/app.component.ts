import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TerminalInputComponent } from './terminal-input/terminal-input.component';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './presentation-components/presentation/presentation.component';
import { PresentationAnimationComponent } from './presentation-components/presentation-animation/presentation-animation.component';
import { HelpComponent } from './used-commands-component/used-commands-content/help-command/help-components/help/help.component';
import { UsedCommandsComponent } from './used-commands-component/used-commands/used-commands.component';
import { NotACommandComponent } from './used-commands-component/used-commands-content/not-a-command/not-a-command.component';
import { HelpCommandComponent } from './used-commands-component/used-commands-content/help-command/help-command.component';
import { LsCommandComponent } from './used-commands-component/used-commands-content/ls-command/ls-command.component';
import { NeofetchCommandComponent } from './used-commands-component/used-commands-content/neofetch-command/neofetch-command.component';
import { PortfolioV1Component } from './used-commands-component/used-commands-content/content-for-cd-command/portfolio-v1/portfolio-v1.component';
import { AboutComponent } from './used-commands-component/used-commands-content/content-for-cd-command/about/about.component';
import { GitComponent } from './used-commands-component/used-commands-content/git/git.component';

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
    HelpCommandComponent,
    LsCommandComponent,
    NeofetchCommandComponent,
    PortfolioV1Component,
    AboutComponent,
    GitComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'portefolio';
  children: string[] = [];
  currentChild: string = '';
  // pathHierarchy = {
  //   'user/': {
  //     'projects/': ['project1', 'project2', 'project3'],
  //     'about/': ['aboutme'],
  //     'secret/': ['secret'],
  //   },
  // };

  public showLoadingAnim: boolean = true;
  public isNotCleared: boolean = true;

  @Input() currentPath: string = 'user/';

  onCurrentPathChange(newPath: string): void {
    this.currentPath = newPath;
  }

  onAnimationCompleted(): void {
    this.showLoadingAnim = false;
  }

  //// All known commands

  onStringReceivedFromCommand(event: string) {
    this.children.push(event);
    this.currentChild = event;
    this.checkForHomeCommand(event);
    this.waitAndScroll();
  }
  onClearCommand(): void {
    this.children = [];
    this.currentChild = '';
    this.isNotCleared = false;
    this.waitAndScroll();
  }

  checkForHomeCommand(event: string) {
    if (event == 'cd ~/' || event == '~/') this.currentPath = 'user/';
  }

  onCdCommand(event: string): void {
    if (this.currentPath == 'user/') {
      switch (event) {
        case 'cd ./projects':
        case 'cd projects':
        case './projects':
          this.children.push(event);
          this.currentChild = event;
          this.currentPath = 'user/projects/';
          break;
        case 'cd ./about':
        case 'cd about':
        case './about':
          this.children.push(event);
          this.currentChild = event;
          break;
        default:
          break;
      }
    }
    if (this.currentPath == 'user/projects/') {
      switch (event) {
        case 'cd ./portfolio_v1':
        case 'cd portfolio_v1':
        case './portfolio_v1':
          this.children.push('portfolio_v1');
          this.currentChild = event;
          break;
        default:
          break;
      }
    }
    this.waitAndScroll();
  }

  onGitEasterEgg() {
    this.children.push('git');
    this.currentChild = 'git';
    this.waitAndScroll();
  }

  onNotACommand(event: string): void {
    this.children.push(event);
    this.currentChild = event;
    this.waitAndScroll();
  }
  /// end of commands

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
