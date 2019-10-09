import { Entity, PrimaryColumn, Column, BeforeInsert, Index} from 'typeorm';
import shortid from 'shortid';

export class PersonEntity {
  @PrimaryColumn({ unique: true })
  @Index()
  id: string;

  @Column()
  name: string;
}

@Entity('people')
export class Person extends PersonEntity {
  @BeforeInsert()
  generateId() {
    this.id = `U${shortid.generate()}`;
  }
}
