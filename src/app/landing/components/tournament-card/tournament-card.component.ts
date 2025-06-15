import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tournament-card',
  standalone: true,
  imports: [],
  templateUrl: './tournament-card.component.html',
  styleUrl: './tournament-card.component.css'
})
export class TournamentCardComponent {
  @Input() title: string = '';
  @Input() date: string = '';
  @Input() prize: string = '';
  @Input() game: string = '';
}
