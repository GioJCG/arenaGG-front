import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { TournamentCardComponent } from '../components/tournament-card/tournament-card.component'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule ,HeaderComponent, FooterComponent, TournamentCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  tournaments = [
  { game: 'LEAGUE-LÉGENDS', title: 'MEAT GURNAMENTS', date: '19 - Dic', prize: '1203' },
  { game: 'LEAGUE-LÉGENDS', title: 'MACHINE', date: '24 - May', prize: '5203' },
];

constructor() {
    console.log('Tournaments data:', this.tournaments); // Verifica en consola del navegador
  }

}