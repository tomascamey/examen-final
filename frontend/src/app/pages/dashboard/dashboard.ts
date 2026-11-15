import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  // 1. Cambiamos '.component.html' a '.html' para que coincida con tu explorador de archivos
  templateUrl: './dashboard.html' 
})
export class DashboardComponent implements OnInit {
  episodes: any[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.dataService.getEpisodes().subscribe((data: any) => {
      // Extraemos '.results' que es donde el API original manda el array
      this.episodes = data.results; 
    });
  }

  goToEpisode(id: number) {
    this.router.navigate(['/episode', id]);
  }
}