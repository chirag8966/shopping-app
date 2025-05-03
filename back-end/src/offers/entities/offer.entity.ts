import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('offers')
export class Offer {
  @PrimaryColumn()
  id: string;

  @Column()
  offer: string;

  @Column()
  offerDescription: string;
}
