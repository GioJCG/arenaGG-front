// src/app/core/services/game.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private gamesSubject = new BehaviorSubject<string[]>(['LOL', 'CSG', 'VALORANT']);
  games$ = this.gamesSubject.asObservable();

  addGame(game: string) {
    const current = this.gamesSubject.value;
    if (!current.includes(game)) {
      this.gamesSubject.next([...current, game]);
    }
  }

  getGames(): string[] {
    return this.gamesSubject.value;
  }
}
