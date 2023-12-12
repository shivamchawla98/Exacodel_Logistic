import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_starter_info')
export class UserStarterInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gstNumber: string;

  @Column()
  companyName: string;

  @Column()
  customerRole: string;

  @Column()
  userType: string;

  @Column()
  country: string;

  // Add other columns and relationships as needed
}
