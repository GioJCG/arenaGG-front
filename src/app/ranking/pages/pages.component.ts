import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { MenuFiltroComponent } from '../../shared/components/menu-filtro/menu-filtro.component';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    MenuFiltroComponent
  ],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {
  // Simulación de un jugador. Luego se reemplazará con datos desde una API
  players = [
    {
      posicion: 1,
      name: 'Sakura',
      played: 10,
      victorys: 8,
      puntos: 1450
    }
  ];
}
