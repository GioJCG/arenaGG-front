import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tournament-card',
  standalone: true,
  templateUrl: './tournament-card.component.html',
  styleUrls: ['./tournament-card.component.css']
})
export class TournamentCardComponent {
  private static counter = 0;
  public localImagePath: string = '';

  @Input() set game(value: string) {
    TournamentCardComponent.counter++;
    const isEven = TournamentCardComponent.counter % 2 === 0;

    this.localImagePath = isEven
      ? 'assets/images/imgValorant.png'
      : 'assets/images/imgLoL.png';
  }

  @Input() date!: string;
  @Input() prize!: string;
  @Input() get image() {
    return this.localImagePath;
  }
}
