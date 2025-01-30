import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'terminal-input',
  standalone: true,
  imports: [],
  templateUrl: './terminal-input.component.html',
  styleUrl: './terminal-input.component.css',
})
export class TerminalInputComponent {
  @Output() helpCommand = new EventEmitter<void>();
  @Output() clearCommand = new EventEmitter<void>();
  @Output() lsCommand = new EventEmitter<void>();
  @Output() notACommand = new EventEmitter<string>();
  @Output() goBackCommand = new EventEmitter<void>();
  @Output() cdCommand = new EventEmitter<string>();
  @Output() neofetchCommand = new EventEmitter<void>();
  @Output() saveUserCommand = new EventEmitter<string>();
  @Output() gitEasterEgg = new EventEmitter<void>();
  //sudo su -
  //man -
  //htop ?
  //man chown
  userCommandsList: string[] = [];
  indexCommand: number = -1;
  resetCommands: boolean = false;

  cdCommandPossibilities: string[] = [
    'cd ./projects',
    'cd projects',
    './projects',
    'cd ./about',
    'cd about',
    './about',
    'cd ./secret',
    'cd secret',
    './secret',
    'cd ./portfolio_v1',
    'cd portfolio_v1',
    './portfolio_v1',
  ];

  public tryCommand(
    event: KeyboardEvent,
    inputCommand: HTMLInputElement
  ): void {
    var inputFromUser: string = '';

    if (event.key == 'Enter') {
      this.indexCommand = -1;
      inputFromUser = inputCommand.value.toLowerCase().trim();
      inputFromUser = this.trimIfNecessary(inputFromUser);

      switch (inputFromUser) {
        case 'help':
        case 'man':
        case 'manual':
          this.helpCommand.emit();
          break;
        case 'git':
          this.gitEasterEgg.emit();
          break;
        case 'cl':
        case 'clear':
          this.clearCommand.emit();
          break;

        case 'ls':
        case 'list':
          this.lsCommand.emit();
          break;

        case '..':
        case 'cd ..':
          this.goBackCommand.emit();
          break;

        case 'neo':
        case 'neofetch':
          this.neofetchCommand.emit();
          break;

        case this.checkCdCommands(inputCommand.value):
          this.cdCommand.emit(inputCommand.value);
          break;

        default:
          this.notACommand.emit(inputCommand.value);
          inputCommand.value = '';
          break;
      }
      this.addCommandToList(inputCommand.value);
      inputCommand.value = '';
    }
  }

  trimIfNecessary(inputFromUser: string): string {
    var tempTrim = inputFromUser.trim().split(/\s+/)[0];
    if (tempTrim == 'git') {
      return tempTrim;
    }
    return inputFromUser;
  }

  checkCdCommands(input: string): string {
    for (const element of this.cdCommandPossibilities) {
      if (input === element) {
        return input;
      }
    }
    return '';
  }

  addCommandToList(event: string) {
    if (event != '') {
      this.userCommandsList.push(event);
    }
  }

  @HostListener('document:keydown', ['$event'])
  arrowUp(event: KeyboardEvent): void {
    const inputElement = document.querySelector(
      'input[name="user-input"]'
    ) as HTMLInputElement;

    if (event.key === 'ArrowUp') {
      this.indexCommand++;

      if (
        this.indexCommand >= 0 &&
        this.indexCommand < this.userCommandsList.length
      ) {
        this.userCommandsList.reverse();
        inputElement.value = this.userCommandsList[this.indexCommand];
        this.userCommandsList.reverse();
      }
    } else if (event.key == 'ArrowDown') {
      this.indexCommand = -1;
      inputElement.value = '';
    }
  }
}
