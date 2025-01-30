import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'terminal-input',
  standalone: true,
  imports: [],
  templateUrl: './terminal-input.component.html',
  styleUrl: './terminal-input.component.css',
})
export class TerminalInputComponent {
  @Output() clearCommand = new EventEmitter<void>();
  @Output() notACommand = new EventEmitter<string>();
  @Output() cdCommand = new EventEmitter<string>();
  @Output() sendInputStringFromCommand = new EventEmitter<string>();

  //sudo su -
  //man -
  //htop ?
  //man chown

  userCommandsList: string[] = [];
  indexCommand: number = -1;
  resetCommands: boolean = false;

  commandPossibilities: string[] = [
    'help',
    'git',
    'ls',
    'list',
    'ls -a',
    'list -a',
    'cd ~/',
    '~/',
    'neo',
    'neofetch',
  ];

  cdCommandPossibilities: string[] = [
    'cd ./projects',
    'cd projects',
    './projects',
    'cd ./info',
    'cd info',
    './info',
    'cd ./secrets',
    'cd secrets',
    './secrets',
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
      inputCommand.focus();
      this.indexCommand = -1;
      inputFromUser = inputCommand.value.toLowerCase().trim();
      inputFromUser = this.trimIfNecessary(inputFromUser);

      switch (inputFromUser) {
        case this.checkCommands(inputFromUser):
          this.sendInputStringFromCommand.emit(inputCommand.value);
          break;

        case this.checkCdCommands(inputFromUser):
          this.cdCommand.emit(inputCommand.value);
          break;

        case 'cl':
        case 'clear':
          this.clearCommand.emit();
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

  checkCommands(input: string): string {
    for (const element of this.commandPossibilities) {
      if (input == element) {
        return input;
      }
    }
    return '';
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
