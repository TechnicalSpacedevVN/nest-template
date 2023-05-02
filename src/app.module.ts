import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { LoggerMiddleware } from './logger.middleware'
import { APP_INTERCEPTOR, RouterModule } from '@nestjs/core'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { addheaderMiddleware } from './auth/add-header.middleware'
import { UserController } from './user/user.controller'
import { HealthModule } from './health/health.module'
import { DevtoolsModule } from '@nestjs/devtools-integration'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { ChatModule } from './chat/chat.module'
import { ReviewModule } from './review/review.module'
import { ProductModule } from './product/product.module'
import { PromotionModule } from './promotion/promotion.module'
import { NotificationModule } from './notification/notification.module'
import { FileModule } from './file/file.module'
import { CartModule } from './cart/cart.module'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { DatabaseModule } from './database.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DateScalar } from './common/scalars/date.scalar'
import { ObjectIdScalar } from './common/scalars/ObjectId.scalar'
import GraphQLJSON from 'graphql-type-json'
import { UuidScalar } from './common/scalars/uuid.scalar'
import { config } from 'dotenv'
import { MongooseModule } from '@nestjs/mongoose'

config()
@Module({
  imports: [
    // DatabaseModule,
    AuthModule,
    UserModule,
    RouterModule.register([
      {
        path: 'user',
        module: UserModule,
      },
    ]),

    HealthModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      installSubscriptionHandlers: true,
      resolvers: {
        // JSON: GraphQLJSON,
        // uuid: UuidScalar,
        // ObjectId: ObjectIdScalar,
      },
      // autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // typePaths: ['./**/*.graphql']
      // include: [UserModule],
    }),
    ChatModule,
    ReviewModule,
    ProductModule,
    PromotionModule,
    NotificationModule,
    FileModule,
    CartModule,
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.local', '.env.development'],
      isGlobal: true,
    }),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: async (configService: ConfigService) => {
    //     return {
    //       type: 'mongodb',
    //       url: configService.get('MONGODB_CONNECTION_STRING'),
    //       database: configService.get('MONGODB_DATABASE'),
    //       synchronize: true,
    //       logging: true,
    //       authSource: 'admin',
    //       // ssl: true,
    //       entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //       // useNewUrlParser: true,
    //       // useUnifiedTopology: true,
    //     }
    //   },
    // }),
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING as any),
    // DevtoolsModule.register({
    //   http: process.env.NODE_ENV !== 'production',
    // }),
  ],
  controllers: [AppController],
  providers: [AppService, DateScalar],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(addheaderMiddleware).forRoutes(UserController)
  }
}
