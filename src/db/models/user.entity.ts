import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import message from './message.entity';
  
  @Entity()
  export default class User {
  
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;
  
    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;
  
    // Associations
    @OneToMany(() => Message, message => message.userConnection)
    userConnection: Promise<message[]>;
  
  }