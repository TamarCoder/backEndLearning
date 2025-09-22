import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TaskModule, UserModule], // სხვა მოდულების იმპორტი (ცარიელია ამ შემთხვევაში)
  controllers: [AppController], // HTTP requests-ს დამუშავებელი controllers
  providers: [AppService], // dependency injection-ისთვის services/providers
})
export class AppModule {} // Root module class



 
// CRUD = Create, Read, Update, Delete
// C - Create: ახალი მონაცემის შექმნა
// R - Read: მონაცემების წაკითხვა/ნახვა
// U - Update: არსებული მონაცემის განახლება
// D - Delete: მონაცემის წაშლა