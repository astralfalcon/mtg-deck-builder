import { PrimaryColumn, Entity, Column, BaseEntity } from 'typeorm'

interface ImageUris {
  normal: string
}

@Entity()
export class Card extends BaseEntity {
  @PrimaryColumn({ type: 'text' })
  id: string

  @Column({ type: 'text' })
  name: string

  @Column({ type: 'simple-json' })
  imageUris: ImageUris
}
