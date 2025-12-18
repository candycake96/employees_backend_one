import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserinfoModule } from './userinfo/userinfo.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UserinfoModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
