import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-signature-checker',
  standalone: true,
  imports: [NgFor],
  templateUrl: './signature-checker.component.html',
  styleUrl: '../../used-commands.css',
})
export class SignatureCheckerComponent {
  text: string = 'Click-here-to-check-the-code!➣';
  textArray: string[] = [];
  isHovered: boolean = false;

  ngOnInit(): void {
    this.textArray = this.text.split('');
  }

  onHover(): void {
    this.isHovered = true;
  }

  onLeave(): void {
    this.isHovered = false;
  }
}
