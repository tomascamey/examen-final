import { Controller, Get, Param } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get('episodes')
  getEpisodes() { return this.apiService.getEpisodes(); }

  @Get('episodes/:id')
  getEpisode(@Param('id') id: string) { return this.apiService.getEpisodeById(+id); }

  @Get('characters')
  getCharacters() { return this.apiService.getCharacters(); }

  @Get('characters/:id')
  getCharacter(@Param('id') id: string) { return this.apiService.getCharacterById(+id); }
} 