import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Async function რომელიც NestJS აპლიკაციას ქმნის და ეშვება
async function bootstrap() {
  // NestFactory-ით NestJS application instance-ის შექმნა AppModule-ის საფუძველზე
  const app = await NestFactory.create(AppModule);

  // სერვერის გაშვება პორტზე (PORT environment variable ან 3000)
  await app.listen(process.env.PORT ?? 3000);
}

// bootstrap ფუნქციის გამოძახება - აპლიკაციის დაწყება
bootstrap();
