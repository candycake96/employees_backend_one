import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserinfoModule } from './userinfo/userinfo.module';

@Module({
  imports: [UserinfoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
