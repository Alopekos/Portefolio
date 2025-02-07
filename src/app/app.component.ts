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
import { InfoComponent } from './used-commands-component/used-commands-content/content-for-cd-command/info/info.component';
import { GitComponent } from './used-commands-component/used-commands-content/git/git.component';
import { AboutComponent } from './used-commands-component/used-commands-content/content-for-cat-command/about/about.component';
import { RpgMapComponent } from './used-commands-component/used-commands-content/content-for-cd-command/rpg-map/rpg-map.component';
import { SignatureCheckerComponent } from './used-commands-component/used-commands-content/content-for-cd-command/signature-checker/signature-checker.component';
import { SecretOneComponent } from './used-commands-component/used-commands-content/secret-files/secret-one/secret-one.component';
import { SecretTwoComponent } from './used-commands-component/used-commands-content/secret-files/secret-two/secret-two.component';
import { SecretThreeComponent } from './used-commands-component/used-commands-content/secret-files/secret-three/secret-three.component';
import { HiddenHelpComponent } from './used-commands-component/used-commands-content/help-command/hidden-help/hidden-help.component';
import { GameProjectComponent } from './used-commands-component/used-commands-content/content-for-cd-command/game-project/game-project.component';

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
    InfoComponent,
    GitComponent,
    AboutComponent,
    RpgMapComponent,
    SignatureCheckerComponent,
    SecretOneComponent,
    SecretTwoComponent,
    SecretThreeComponent,
    HiddenHelpComponent,
    GameProjectComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'portefolio';
  children: string[] = [];
  currentChild: string = '';

  public showLoadingAnim: boolean = true;
  public isNotCleared: boolean = true;

  @Input() currentPath: string = '';

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
    if (event == 'cd ~/' || event == '~/' || event == 'cd ..')
      this.currentPath = '';
  }

  onDirectionCommand(event: string): void {
    if (this.currentPath == '') {
      switch (true) {
        case event.includes('projects'):
          this.children.push(event);
          this.currentChild = event;
          this.currentPath = 'projects/';
          break;

        case event.includes('about'):
        case event.includes('info'):
        case event.includes('.help'):
          this.children.push(event);
          this.currentChild = event;
          break;

        case event.includes('secrets'):
          this.children.push(event);
          this.currentChild = event;
          this.currentPath = 'secrets/';
          break;

        case event.includes('.27061987'):
          window.open(
            'https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1',
            '_blank'
          );
          break;
        default:
          break;
      }
    }

    if (this.currentPath == 'projects/') {
      switch (true) {
        case event.includes('rpg_map'):
        case event.includes('portfolio_v1'):
        case event.includes('signature_checker'):
        case event.includes('game'):
          this.children.push(event);
          this.currentChild = event;
          break;

        default:
          break;
      }
    }

    if (this.currentPath == 'secrets/') {
      switch (true) {
        case event.includes('secret1'):
        case event.includes('secret2'):
        case event.includes('secret3'):
          this.children.push(event);
          this.currentChild = event;
          break;

        default:
          break;
      }
    }
    if (event.includes('game')) {
      this.waitAndScrollJustALittle();
    } else this.waitAndScroll();
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

  async waitAndScrollJustALittle(): Promise<void> {
    await this.wait(200);

    window.scrollTo({
      top: window.scrollY + window.innerHeight * 0.9,
      behavior: 'smooth',
    });
  }

  wait(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
