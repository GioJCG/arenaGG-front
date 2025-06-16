import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../core/services/game.service';

@Component({
  selector: 'app-menu-filtro',
  standalone: true,
  templateUrl: './menu-filtro.component.html',
  styleUrls: ['./menu-filtro.component.css'],
})
export class MenuFiltroComponent implements OnInit {
  games: string[] = [];
  selectedGame: string = '';

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.games$.subscribe(games => {
      this.games = games;
      if (!this.selectedGame && games.length) {
        this.selectedGame = games[0];
      }
    });
  }

  selectGame(game: string) {
    this.selectedGame = game;
  }
}
