import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { EpisodeDetail } from './pages/episode-detail/episode-detail';
import { CharacterDetail } from './pages/character-detail/character-detail'; // Asumiendo que se generó igual que EpisodeDetail

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'browse', component: DashboardComponent },
  { path: 'episode/:id', component: EpisodeDetail },
  { path: 'character/:id', component: CharacterDetail }
];