import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Person } from './person.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<Person[]> {
    const people = [];

    for (let i = 0; i <= 10; i++) {
      people.push(await this.appService.createFakePerson());
    }

    return people;
  }
}
