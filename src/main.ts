import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { config } from 'dotenv'
// import * as cookieParser from 'cookie-parser'
import fastifyCookie from '@fastify/cookie'
import { ValidationPipe, VersioningType } from '@nestjs/common'
import { addheaderMiddleware } from './auth/add-header.middleware'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
config()

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    // new FastifyAdapter({
    //   logger: true,
    // }),

    {
      cors: true,
      // httpsOptions: {},
    },
  )

  const config = new DocumentBuilder()
    .setTitle('Spacedev service')
    .setDescription('The Spacedev API description')
    .setVersion('1.0')
    .addTag('spacedev')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  app.useGlobalPipes(new ValidationPipe())
  app.use(addheaderMiddleware)

  app.enableVersioning({
    type: VersioningType.URI,
    prefix: 'v',
    defaultVersion: '1',
  })
  // app.enableCors({
  //   methods: ['GET', 'POST'],
  //   origin: true,
  //   allowedHeaders: ['Access-Control-Allow-Credentials'],
  // })
  // await app.register(fastifyCookie, {
  //   secret: 'my-secret', // for cookies signature
  // })
  await app.listen(process.env.PORT || 3000)
}
bootstrap()
