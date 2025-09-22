import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Testing framework-ის მთავარი ფუნქცია რომელიც აღწერს AppController-ის ტესტებს
describe('AppController', () => {
  // AppController-ის ინსტანსი რომელიც ტესტებში გამოიყენება
  let appController: AppController;

  // ყოველი ტესტის წინ ეს კოდი სრულდება (initialization)
  beforeEach(async () => {
    // ტესტისთვის სპეციალური NestJS module-ის შექმნა
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController], // ტესტირებადი controller-ის რეგისტრაცია
      providers: [AppService], // დამოკიდებული service-ის რეგისტრაცია
    }).compile(); // module-ის კომპილაცია და ინიციალიზაცია

    // AppController-ის ინსტანსის მიღება testing module-იდან
    appController = app.get<AppController>(AppController);
  });

  // "root" endpoint-ის ტესტების ჯგუფი
  describe('root', () => {
    // კონკრეტული ტესტის შემთხვევა
    it('should return "Hello World!"', () => {
      // ვამოწმებთ რომ getHello() მეთოდი "Hello World!" სტრინგს აბრუნებს
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
