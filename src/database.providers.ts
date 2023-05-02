import { DataSource } from 'typeorm'
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mongodb',
        url: 'mongodb+srv://pnj:FkYkKnKPRnop79Xt@cluster0.ticyv.mongodb.net',
        database: 'pnj',
        logging: true,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })

      return dataSource.initialize()
    },
  },
]
