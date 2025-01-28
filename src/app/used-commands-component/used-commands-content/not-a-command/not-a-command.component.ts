import { Component } from '@angular/core';
import { HelpComponent } from '../../../help-components/help/help.component';

@Component({
  selector: 'app-not-a-command',
  standalone: true,
  imports: [HelpComponent],
  templateUrl: './not-a-command.component.html',
  styleUrl: '../used-commands.css',
})
export class NotACommandComponent {}
