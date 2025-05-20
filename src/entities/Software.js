import { EntitySchema } from 'typeorm';

export const Software = new EntitySchema({
  name: 'Software',
  tableName: 'softwares',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },
    name: {
      type: 'varchar'
    },
    description: {
      type: 'text'
    },
    accessLevels: {
      type: 'simple-array' // stores as comma-separated string
    }
  }
});
