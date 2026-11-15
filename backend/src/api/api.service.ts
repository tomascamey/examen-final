import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ApiService {
  private baseUrl = 'https://rickandmortyapi.com/api';

  constructor(private readonly httpService: HttpService) {}

  async getEpisodes() {
    const { data } = await firstValueFrom(this.httpService.get(`${this.baseUrl}/episode`));
    return data.results;
  }

  async getEpisodeById(id: number) {
    const { data } = await firstValueFrom(this.httpService.get(`${this.baseUrl}/episode/${id}`));
    return data;
  }

  async getCharacters() {
    const { data } = await firstValueFrom(this.httpService.get(`${this.baseUrl}/character`));
    return data.results;
  }

  async getCharacterById(id: number) {
    const { data } = await firstValueFrom(this.httpService.get(`${this.baseUrl}/character/${id}`));
    return data;
  }
}