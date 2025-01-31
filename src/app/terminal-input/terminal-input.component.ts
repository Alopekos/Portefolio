import {
  Component,
  EventEmitter,
  HostListener,
  Output,
  Input,
} from '@angular/core';

@Component({
  selector: 'terminal-input',
  standalone: true,
  imports: [],
  templateUrl: './terminal-input.component.html',
  styleUrl: './terminal-input.component.css',
})
export class TerminalInputComponent {
  @Input() currentPath: string = '';
  @Output()
  clearCommand = new EventEmitter<void>();
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
    'cd ..',
    'neofetch',
  ];

  directionCommandPossibilities: string[] = [
    'cd ./projects',
    'cd projects',
    './info',
    'info',
    'cat about.txt',
    'cat ./about.txt',
    'cd ./secrets',
    'cd secrets',
    './portfolio_v1',
    'portfolio_v1',
    './rpg_map',
    'rpg_map',
    './signature_checker',
    'signature_checker',
    'secret1',
    './secret1',
    'cat secret2.txt',
    'cat ./secret2.txt',
    'cat .secret3.txt',
    'cat ./.secret3.txt',
    './.27061987',
    '.27061987',
    './.help',
    '.help',
    '.game',
    './.game',
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

  // Get the previous commands from the user or autocomplete
  addCommandToList(event: string) {
    if (event != '') {
      this.userCommandsList.push(event);
    }
  }
  @HostListener('document:keydown', ['$event'])
  arrowUpOrTabPressed(event: KeyboardEvent): void {
    const inputElement = document.querySelector(
      'input[name="user-input"]'
    ) as HTMLInputElement;

    if (event.key === 'ArrowUp') {
      this.lookForLastCommandUsed(inputElement, event);
    } else if (event.key == 'ArrowDown') {
      this.indexCommand = -1;
      inputElement.value = '';
    } else if (event.key == 'Tab') {
      event.preventDefault();
      this.autocompleteCommand(inputElement);
    }
  }

  lookForLastCommandUsed(inputElement: HTMLInputElement, event: KeyboardEvent) {
    this.indexCommand++;

    if (
      this.indexCommand >= 0 &&
      this.indexCommand < this.userCommandsList.length
    ) {
      this.userCommandsList.reverse();
      inputElement.value = this.userCommandsList[this.indexCommand];
      this.userCommandsList.reverse();
    }
  }

  autocompleteCommand(inputElement: HTMLInputElement) {
    const allCommands: string[] = this.commandPossibilities.concat(
      this.directionCommandPossibilities
    );
    const filteredCommands = allCommands.filter((item) =>
      item.toLowerCase().startsWith(inputElement.value)
    );
    if (filteredCommands.length == 1) {
      inputElement.value = filteredCommands[0];
    }
  }
}
