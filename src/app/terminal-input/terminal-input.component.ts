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
  @Output() directionCommand = new EventEmitter<string>();
  @Output() sendInputStringFromCommand = new EventEmitter<string>();
  @Output() gitEasterEgg = new EventEmitter<void>();

  //sudo su -
  //man -
  //htop ?
  //man chown

  userCommandsList: string[] = [];
  indexCommand: number = -1;
  resetCommands: boolean = false;

  commandPossibilities: string[] = [
    'help',
    'ls',
    'list',
    'ls -a',
    'list -a',
    'cd ~/',
    '~/',
    'neo',
    'neofetch',
  ];

  directionCommandPossibilities: string[] = [
    'cd ./projects',
    'cd projects',
    './projects',
    'cd ./info',
    'cd info',
    './info',
    'cat about.txt',
    'cat ./about.txt',
    'cd ./secrets',
    'cd secrets',
    './secrets',
    'cd ./portfolio_v1',
    'cd portfolio_v1',
    './portfolio_v1',
    'cd ./rpg_map',
    'cd rpg_map',
    './rpg_map',
    'cd ./signature_checker',
    'cd signature_checker',
    './signature_checker',
    './.27061987',
    'cd ./.27061987',
    'cd .27061987',
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
        case 'git':
          this.gitEasterEgg.emit();
          break;

        case this.checkCommands(inputFromUser):
          this.sendInputStringFromCommand.emit(inputCommand.value);
          break;

        case this.checkCdCommands(inputFromUser):
          this.directionCommand.emit(inputCommand.value);
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
    for (const element of this.directionCommandPossibilities) {
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
