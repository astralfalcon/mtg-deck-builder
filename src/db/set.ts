import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity()
export class Set extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ type: 'text' })
  name!: string

  @Column({ type: 'text' })
  code!: string

  @Column({ type: 'text' })
  arenaCode!: string

  @Column({ type: 'text' })
  keyrune!: string
}
