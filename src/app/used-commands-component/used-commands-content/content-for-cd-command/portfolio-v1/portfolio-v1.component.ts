import { Component } from '@angular/core';
import { NgOptimizedImage, CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-v1',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './portfolio-v1.component.html',
  styleUrl: '../../used-commands.css',
})
export class PortfolioV1Component {
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
