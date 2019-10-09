import { Person } from './person.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import faker from 'faker';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
  ) {}
  async createFakePerson(): Promise<Person> {
    return this.personRepository.save(
      this.personRepository.create({
        name: faker.name.firstName(),
      }),
    );
  }
}
