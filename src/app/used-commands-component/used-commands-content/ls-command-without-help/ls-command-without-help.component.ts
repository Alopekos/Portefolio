import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ls-command-without-help',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ls-command-without-help.component.html',
  styleUrl: '../used-commands.css',
})
export class LsCommandComponentWithoutHelp implements OnInit {
  @Input() currentPathWithoutHelp: string = '';
  @Output() currentPathChange = new EventEmitter<string>();

  currentPathForSingleComponent: string = '';

  ngOnInit() {
    this.currentPathForSingleComponent = this.currentPathWithoutHelp;
  }

  updateCurrentPath(event: string): void {
    this.currentPathWithoutHelp = event;
  }
}
