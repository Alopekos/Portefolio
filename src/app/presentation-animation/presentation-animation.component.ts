import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'presentation-animation',
  standalone: true,
  templateUrl: './presentation-animation.component.html',
  styleUrls: ['./presentation-animation.component.css'],
})
export class PresentationAnimationComponent {
  public textAnim = '';
  private content = 'neosketch';

  @Output() animationCompleted = new EventEmitter<void>();

  constructor() {
    this.animate();
  }

  async animate(): Promise<void> {
    for (let i = 0; i < this.content.length; i++) {
      await this.delay(200);
      this.textAnim += this.content[i];

      if (this.textAnim === this.content) {
        await this.delay(600);
        this.animationCompleted.emit();
      }
    }
  }

  delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
