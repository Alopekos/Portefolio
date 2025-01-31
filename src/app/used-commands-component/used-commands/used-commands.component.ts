import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-used-commands',
  standalone: true,
  imports: [],
  templateUrl: './used-commands.component.html',
  styleUrl: './used-commands.component.css',
})
export class UsedCommandsComponent {
  @Input() name!: string;
  @Input() currentPath!: string;

  shownPath: string = '';

  ngOnInit() {
    this.shownPath = this.currentPath;
  }
}
