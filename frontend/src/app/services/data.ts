import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  // Consumimos el API pública directamente para evitar bloqueos
  getEpisodes() { return this.http.get<any>('https://rickandmortyapi.com/api/episode'); }
  getEpisode(id: string) { return this.http.get<any>(`https://rickandmortyapi.com/api/episode/${id}`); }
  getCharacter(id: string) { return this.http.get<any>(`https://rickandmortyapi.com/api/character/${id}`); }
  
  // Mantenemos NestJS solo para el backend de seguridad
  login(credentials: any) { 
    return this.http.post('http://localhost:3000/auth/login', credentials); 
  }
}