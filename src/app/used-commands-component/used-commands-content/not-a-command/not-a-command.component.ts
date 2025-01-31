import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { HelpComponent } from '../help-command/help-components/help/help.component';

@Component({
  selector: 'app-not-a-command',
  standalone: true,
  imports: [HelpComponent],
  templateUrl: './not-a-command.component.html',
  styleUrl: '../used-commands.css',
})
export class NotACommandComponent {
  @Input() currentChild!: string;
  commandName: string = '';

  ngOnInit() {
    this.commandName = this.currentChild;
  }
}
