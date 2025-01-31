import { Component } from '@angular/core';
import { NgFor, NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-rpg-map',
  standalone: true,
  imports: [NgFor, NgOptimizedImage],
  templateUrl: './rpg-map.component.html',
  styleUrl: '../../used-commands.css',
})
export class RpgMapComponent {
  text: string = 'Click-here-to-visit!➣';
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
