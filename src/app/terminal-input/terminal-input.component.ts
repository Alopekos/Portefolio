import { Component, EventEmitter, Output } from '@angular/core';

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
  @Output() notACommand = new EventEmitter<void>();

  public tryCommand(
    event: KeyboardEvent,
    inputCommand: HTMLInputElement
  ): void {
    var inputFromUser: string = '';

    if (event.key == 'Enter') {
      inputFromUser = inputCommand.value.toLowerCase().trim();
      switch (inputFromUser) {
        case 'help':
          this.helpCommand.emit();
          break;

        case 'cl':
        case 'clear':
          this.clearCommand.emit();
          break;

        case 'ls':
        case 'list':
          this.lsCommand.emit();
          break;

        default:
          this.notACommand.emit();
          break;
      }
      inputCommand.value = '';
    }
  }
}
