import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { config } from 'dotenv'
// import * as cookieParser from 'cookie-parser'
import fastifyCookie from '@fastify/cookie'
config()

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: true,
    }),
    {
      cors: true,
      httpsOptions: {},
    },
  )
  // app.enableCors({
  //   methods: ['GET', 'POST'],
  //   origin: true,
  //   allowedHeaders: ['Access-Control-Allow-Credentials'],
  // })
  await app.register(fastifyCookie, {
    secret: 'my-secret', // for cookies signature
  })
  await app.listen(process.env.PORT || 3000)
}
bootstrap()
