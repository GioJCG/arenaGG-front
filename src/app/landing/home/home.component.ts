import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { TournamentCardComponent } from '../components/tournament-card/tournament-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    TournamentCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tournaments = [
    { game: 'LEAGUE-LÉGENDS', title: 'MEAT GURNAMENTS', date: '19 - Dic', prize: '1203' },
    { game: 'Valorant', title: 'MACHINE', date: '24 - May', prize: '5203' },
    { game: 'LEAGUE-LÉGENDS', title: 'FURY CUP', date: '02 - Ene', prize: '870' },
    { game: 'Valorant', title: 'PHANTOM SQUAD', date: '18 - Jun', prize: '740' },
    { game: 'LEAGUE-LÉGENDS', title: 'DRAGON CLASH', date: '07 - Jul', prize: '990' },
    { game: 'Valorant', title: 'SENTINEL DUEL', date: '29 - Ago', prize: '1130' }
  ];

  stats = {
    tournamentsHeld: 1213,
    registeredPlayers: 7098
  };
}
