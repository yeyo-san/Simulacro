import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  HasOne
} from 'sequelize-typescript';
import { Permissions } from './permissionModel';

@Table
export default class Entities extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        defaultValue: false,
    })
    name!: string;

    @HasOne(() => Permissions)
    permissions!: Permissions[]
}