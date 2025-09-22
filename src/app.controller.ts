import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';



// Backend Controller-ები შეიძლება გამოიყენოს routes/pages-ების შესაქმნელად:

@Controller()
export class AppController {
  // Constructor რომელიც AppService-ს dependency injection-ით იღებს
  constructor(private readonly appService: AppService) {}

  // GET HTTP method decorator - ეს მეთოდი GET /-ზე უპასუხებს
  @Get()
  getHello(): string {
    // AppService-ის getHello() მეთოდის გამოძახება და შედეგის დაბრუნება
    return this.appService.getHello();
  }
}