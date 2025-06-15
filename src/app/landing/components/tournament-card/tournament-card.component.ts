import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tournament-card',
  standalone: true,
  templateUrl: './tournament-card.component.html',
  styleUrls: ['./tournament-card.component.css'],
  imports: [CommonModule]
})
export class TournamentCardComponent {
  private static counter = 0;
  private localImagePath: string = '';

  // Alternar imágenes automáticamente
  @Input() set game(value: string) {
    if (value) {
      TournamentCardComponent.counter++;
      const isEven = TournamentCardComponent.counter % 2 === 0;

      this.localImagePath = isEven
        ? 'assets/images/imgValorant.png'
        : 'assets/images/imgLoL.png';
    }
    this._game = value;
  }

  private _game!: string;
  get game(): string {
    return this._game;
  }

  @Input() date!: string;
  @Input() prize!: string;

  @Input() get image(): string {
    return this.localImagePath;
  }

  // Visor de estadísticas
  @Input() showStats: boolean = false;
  @Input() statsHeld?: number;
  @Input() statsPlayers?: number;
}
