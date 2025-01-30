import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ls-command',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ls-command.component.html',
  styleUrl: '../used-commands.css',
})
export class LsCommandComponent implements OnInit {
  @Input() currentPath: string = '';
  @Input() currentChild: string = '';
  @Output() currentPathChange = new EventEmitter<string>();

  currentPathForSingleComponent: string = '';
  currentChildForSingleComponent: string = '';

  ngOnInit() {
    this.currentPathForSingleComponent = this.currentPath;
    this.currentChildForSingleComponent = this.currentChild;
  }

  updateCurrentPath(event: string): void {
    this.currentPath = event;
  }
}
